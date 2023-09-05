import express from "express";
import dotenv from "dotenv";
import initializer from "./src/initializers/initializer.js";

dotenv.config();

const serverPort = process.env.PORT;

async function startServer(params) {
  const server = express();
  await initializer(server);
  server.listen(serverPort,()=> console.log(`Terminal AI listening on the port number ${process.env.PORT}`));
}

startServer();
