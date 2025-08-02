/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { connectDB, disconnectDB } from "./config/db.config";
import { env } from "./config/env.config";

let server: Server;

const pushStartServer = async () => {
  try {
    await connectDB();
    server = app.listen(env.PORT, () => {
      console.log("Server is running on PORT:" + env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

(async() => {
   await pushStartServer();
})()

const stopServer = async (signal: string, error?: unknown) => {
  console.log(`${signal} detected. Server is shutting down...`);

  if(error) console.log(error);

  try {
    if (mongoose.connection.readyState === 1) {
      await disconnectDB();
    }

    if (server) {
      server.close(() => {
        process.exit(signal === "SIGINT" || signal === "SIGTERM" ? 0 : 1);
      });
    } else {
      process.exit(signal === "SIGINT" || signal === "SIGTERM" ? 0 : 1);
    }
  } catch (error) {
    console.log("Error during shutdonw", error);
    process.exit(1);
  }
};

process.on("SIGINT",() => stopServer("SIGINT"));
process.on("SIGTERM",() => stopServer("SIGTERM"));
process.on("uncaughtException", (error) => stopServer("uncaughtException", error));
process.on("unhandledRejection", (error) => stopServer("unhandledRejection", error));
