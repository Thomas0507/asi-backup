// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { createServer } from "http";
import { Server } from "socket.io";

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDBURL = "mongodb://127.0.0.1:27017/socket-game?authSource=admin";
dotenv.config();

const cors = require("cors");
const app: Express = express();
const port = process.env.PORT || 4000;

const httpServer = createServer();
const io = new Server(httpServer, {
  // options
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("user connected: ", socket.id);
  socket.on("send_message", (data) => {
    console.log("Message Received ", data); // Log the received message data

    // Emit the received message data to all connected clients
    io.emit("receive_message", data);
  });
});
httpServer.listen(3000);

// mongoose
//   .connect(mongoDBURL, {})
//   .then(() => {
//     console.log("Connection Successfull");
//   })
//   .catch((err: any) => {
//     console.log(err, "Received an Error");
//   });
