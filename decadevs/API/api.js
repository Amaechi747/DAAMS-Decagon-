"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = __importDefault(require("express"));
const controls_1 = require("../controller/controls");
const api = express_1.default.Router();
exports.api = api;
api.use(express_1.default.json());
//signup route
api.post("/create-account", async (req, res) => {
    const token = await controls_1.CONTROL.createAccount(req.body);
    res.json({ token: token });
});
//login route
api.post("/login", controls_1.CONTROL.loginAuth, async (req, res) => { });
// get a decadev route
api.get("/get-decadev/:token", controls_1.CONTROL.getDecadev, async (req, res) => { });
//update profile picture route
api.post("/update-dp/:token", controls_1.CONTROL.updateDisplayPicture, async (req, res) => { });
