import express from "express";
import { CONTROL } from "../controller/controls";

const api = express.Router();

api.use(express.json());

//signup route
api.post("/create-account", async (req, res) => {
  const token = await CONTROL.createAccount(req.body);
  res.json({ token: token });
});

//login route
api.post("/login", CONTROL.loginAuth, async (req, res) => {});

// get a decadev route
api.get("/get-decadev/:token", CONTROL.getDecadev, async (req, res) => {});

//update profile picture route
api.post(
  "/update-dp/:token",
  CONTROL.updateDisplayPicture,
  async (req, res) => {}
);

export { api };
