"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const multer_1 = __importDefault(require("multer"));
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloudinary_url: process.env.CLOUDINARY_URL
});
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: {
        folder: 'ApplicantDocuments',
        allowedFormats: ["png", "jpeg", "jpg", "pdf"]
    },
});
const parser = (0, multer_1.default)({ storage: storage });
module.exports = {
    cloudinary: cloudinary_1.v2,
    storage
};
//# sourceMappingURL=cloudinary.js.map