"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const dotEnv = dotenv_1.default.config();
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
const index_2 = __importDefault(require("./routes/applicants/index"));
const index_3 = __importDefault(require("./routes/decadevs/index"));
const index_4 = __importDefault(require("./routes/admin/index"));
var app = (0, express_1.default)();
// view engine setup
app.set("views", path_1.default.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    methods: ["GET", "PATCH", "OPTIONS", "POST", "DELETE"],
    credentials: true,
}));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, "../publicmain")));
app.use('/', index_1.default);
app.use('/users', users_1.default);
app.use('/applicants', index_2.default);
app.use('/decadev', index_3.default);
app.use('/decagon_hq/admin', index_4.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV === "development") {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get("env") === "development" ? err : {};
        // render the error page
        res.status(err.status || 500);
        res.render("error");
    }
    else {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get("env") === "production" ? err : {};
        // render the error page
        res.status(err.status || 500);
        res.render("error");
    }
});
module.exports = app;
//# sourceMappingURL=app.js.map