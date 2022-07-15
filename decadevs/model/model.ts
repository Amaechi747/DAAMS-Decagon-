import mongoose from "mongoose";

//schema for Decadev
const DecadevSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const Decadev = mongoose.model("decadevs", DecadevSchema);

const DB = {
  //database connector
  async connector() {
    var DBConnectionStatus = 0;
    const url = "mongodb://127.0.0.1:27017/decadev";
    const options = {
      serverSelectionTimeoutMS: 5000,
    };
    try {
      await mongoose.connect(url, options);
      console.log("mongoose connected to database");
      DBConnectionStatus = 1;
      return DBConnectionStatus;
    } catch (error) {
      console.log(error);
    }
  },

  //----> create a new entry from signup
  async createDecadev(options: object) {
    const decadev = new Decadev(options);
    const status = await decadev.save();
    // return status; ---->development only
  },

  async findOneDecadev(squadNo: string) {
    const decadev = await Decadev.findOne({ squadNo: squadNo });
    return decadev;
  },

  //update token during login---------->
  async updateToken(id: any, token: string) {
    await Decadev.findOneAndUpdate({ _id: id }, { token: token });
  },

  //update profile image
  async updateImage(id: any, imageBuffer: string) {
    await Decadev.findOneAndUpdate({ squadNo: id }, { image: imageBuffer });
  },
};

// starting the database connector ---------> development only !!important
// DB.connector("mongodb://127.0.0.1:27017/decadev", {
//   serverSelectionTimeoutMS: 5000,
// });

// testing the db connection
// DB.createDecadev({
//   firstName: "ikeoluwa",
//   lastName: "Ibrahim",
//   email: "kareemibrahim30@gmail.com",
//   stack: "nodejs",
//   squadNo: "010/122",
//   password: "grgdgb",
// });

export { DB };
