import { v2 as cloudinary } from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary';
import multer from 'multer';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloudinary_url: process.env.CLOUDINARY_URL
  });

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'ApplicantDocuments',
      allowedFormats: ["png", "jpeg", "jpg", "pdf"]
    },
  }as any);


  const parser = multer({ storage: storage });

  module.exports = {
    cloudinary,
    storage
  }