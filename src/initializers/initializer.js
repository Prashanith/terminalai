import express from "express";
import api from "../api/api.js";

async function initializer(server) {
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use("/", api());
}

export default initializer;
