"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//schema for Decadev
const DecadevSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
    stack: {
        type: String,
        trim: true,
        lowecase: true,
    },
    squadNo: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        default: "Not Authenthicated",
    },
    image: {
        type: String,
        default: `url('../img/add-dp-icon.png')`,
    },
}, { timestamps: true });
const Decadev = mongoose_1.default.model("decadevs", DecadevSchema);
const DB = {
    //database connector
    async connector() {
        var DBConnectionStatus = 0;
        const url = "mongodb://127.0.0.1:27017/decadev";
        const options = {
            serverSelectionTimeoutMS: 5000,
        };
        try {
            await mongoose_1.default.connect(url, options);
            console.log("mongoose connected to database");
            DBConnectionStatus = 1;
            return DBConnectionStatus;
        }
        catch (error) {
            console.log(error);
        }
    },
    //----> create a new entry from signup
    async createDecadev(options) {
        const decadev = new Decadev(options);
        const status = await decadev.save();
        // return status; ---->development only
    },
    async findOneDecadev(squadNo) {
        const decadev = await Decadev.findOne({ squadNo: squadNo });
        return decadev;
    },
    //update token during login---------->
    async updateToken(id, token) {
        await Decadev.findOneAndUpdate({ _id: id }, { token: token });
    },
    //update profile image
    async updateImage(id, imageBuffer) {
        await Decadev.findOneAndUpdate({ squadNo: id }, { image: imageBuffer });
    },
};
exports.DB = DB;
