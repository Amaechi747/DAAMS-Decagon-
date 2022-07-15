// import { auth } from "express-openid-connect";
import express, { Request, Response } from "express";
import path from "path";
import { api } from "./API/api";
import { DB } from "./model/model";
import { CONTROL } from "./controller/controls";

const app = express();
const publicPath = path.join(process.cwd(), "/public");

app.use(express.static(publicPath));

//re-directing all API calls ---> !!important!!
app.use("/api", api);

const PORT = process.env.PORT || 3000;

app.get("/decadev", CONTROL.dashboardAuth, (req, res) => {
  res.sendFile(`${publicPath}/error.html`);
});

app.listen(PORT, () => {
  console.log("server up");
});

//connect to DB
DB.connector();

export { app, publicPath };
