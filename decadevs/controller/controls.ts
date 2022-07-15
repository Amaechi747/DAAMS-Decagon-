import { NextFunction, Request, Response } from "express";
import { DB } from "../model/model";
import { PASSWORD } from "../utils/passwordHash";
import { TOKEN } from "../utils/tokenizer";
import { publicPath } from "../app";

const CONTROL = {
  async createAccount(body: any) {
    body.password = await PASSWORD.hash(body.password);
    body.token = await TOKEN.sign(body.squadNo);
    await DB.createDecadev(body);
    return body.token;
  },

  //signup dashboard authentcation control
  async dashboardAuth(req: Request, res: Response, next: NextFunction) {
    const token: any = req.query.auth;
    try {
      await TOKEN.verify(token);
      res.sendFile(`${publicPath}/decadev.html`);
    } catch (error) {
      next();
    }
  },

  //login authentication control --middleware
  async loginAuth(req: Request, res: Response, next: NextFunction) {
    const decadev = await DB.findOneDecadev(req.body.squadNo);
    if (!decadev) {
      res.json({ message: "Incorrect login" });
    } else {
      //checking the hash
      const password = await PASSWORD.compare(
        req.body.password,
        decadev.password
      );
      if (password) {
        //refresh and update user token
        const token = await TOKEN.sign(req.body.squadNo);
        res.json({ token: token }); //------> sending before updating for performance +
        DB.updateToken(decadev._id, token);
      } else {
        res.json({ message: "Incorrect login" });
      }
    }
  },

  //get and return decadev
  async getDecadev(req: Request, res: Response, next: NextFunction) {
    const authentication: any = await TOKEN.verify(req.params.token); //----->invalid token throws error
    //invalid token error caught by local variable(error)
    const decadev = await DB.findOneDecadev(authentication.id);
    res.json(decadev);
  },

  //confirm token for general api usage
  async updateDisplayPicture(req: Request, res: Response, next: NextFunction) {
    const authentication: any = await TOKEN.verify(req.params.token);
    // const imageBuffer = Buffer.alloc(12, req.body.data, "base64");--->using string,,,inneficient
    if (authentication) DB.updateImage(authentication.id, req.body.data);
    res.json({ message: "success" });
  },
};

export { CONTROL };
