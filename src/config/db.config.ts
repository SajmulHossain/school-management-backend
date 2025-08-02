/* eslint-disable no-console */
import mongoose from "mongoose";
import { env } from "./env.config";

export const connectDB = async () => {
  try {
    await mongoose.connect(env.DB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  await mongoose.connection.close();
};
