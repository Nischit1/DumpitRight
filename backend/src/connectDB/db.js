import mongoose from "mongoose";
import { DB_URL } from "../config/config.js";

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(DB_URL);
  console.log(
    `expressApp is connected to mongodb at port 8000 successfully`
  );
};

export default connectDB;
