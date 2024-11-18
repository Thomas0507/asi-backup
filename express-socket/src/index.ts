// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";




const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDBURL = "mongodb://127.0.0.1:27017/socket-game?authSource=admin";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.use(express.json());

// mongoose
//   .connect(mongoDBURL, {}).then(
//     console.log("connexion successful")
//   ).catch((err: any) => {
//     console.log("connexion failed", err)
//     process.exit(-1);
//   });

io.on('connection', (socket: any) => {
  console.log('a user connected', socket);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

mongoose.connect(mongoDBURL, {
})
  .then(() => { console.log("Connection Successfull") })
  .catch((err: any) => { console.log(err, "Received an Error") })