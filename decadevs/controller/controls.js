"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTROL = void 0;
const model_1 = require("../model/model");
const passwordHash_1 = require("../utils/passwordHash");
const tokenizer_1 = require("../utils/tokenizer");
const app_1 = require("../app");
const CONTROL = {
    async createAccount(body) {
        body.password = await passwordHash_1.PASSWORD.hash(body.password);
        body.token = await tokenizer_1.TOKEN.sign(body.squadNo);
        await model_1.DB.createDecadev(body);
        return body.token;
    },
    //signup dashboard authentcation control
    async dashboardAuth(req, res, next) {
        const token = req.query.auth;
        try {
            await tokenizer_1.TOKEN.verify(token);
            res.sendFile(`${app_1.publicPath}/decadev.html`);
        }
        catch (error) {
            next();
        }
    },
    //login authentication control --middleware
    async loginAuth(req, res, next) {
        const decadev = await model_1.DB.findOneDecadev(req.body.squadNo);
        if (!decadev) {
            res.json({ message: "Incorrect login" });
        }
        else {
            //checking the hash
            const password = await passwordHash_1.PASSWORD.compare(req.body.password, decadev.password);
            if (password) {
                //refresh and update user token
                const token = await tokenizer_1.TOKEN.sign(req.body.squadNo);
                res.json({ token: token }); //------> sending before updating for performance +
                model_1.DB.updateToken(decadev._id, token);
            }
            else {
                res.json({ message: "Incorrect login" });
            }
        }
    },
    //get and return decadev
    async getDecadev(req, res, next) {
        const authentication = await tokenizer_1.TOKEN.verify(req.params.token); //----->invalid token throws error
        //invalid token error caught by local variable(error)
        const decadev = await model_1.DB.findOneDecadev(authentication.id);
        res.json(decadev);
    },
    //confirm token for general api usage
    async updateDisplayPicture(req, res, next) {
        const authentication = await tokenizer_1.TOKEN.verify(req.params.token);
        // const imageBuffer = Buffer.alloc(12, req.body.data, "base64");--->using string,,,inneficient
        if (authentication)
            model_1.DB.updateImage(authentication.id, req.body.data);
        res.json({ message: "success" });
    },
};
exports.CONTROL = CONTROL;
