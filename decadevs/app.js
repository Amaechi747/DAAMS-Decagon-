"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicPath = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const api_1 = require("./API/api");
const model_1 = require("./model/model");
const controls_1 = require("./controller/controls");
const app = (0, express_1.default)();
exports.app = app;
const publicPath = path_1.default.join(process.cwd(), "/public");
exports.publicPath = publicPath;
app.use(express_1.default.static(publicPath));
//re-directing all API calls ---> !!important!!
app.use("/api", api_1.api);
const PORT = process.env.PORT || 3000;
app.get("/decadev", controls_1.CONTROL.dashboardAuth, (req, res) => {
    res.sendFile(`${publicPath}/error.html`);
});
app.listen(PORT, () => {
    console.log("server up");
});
//connect to DB
model_1.DB.connector();
