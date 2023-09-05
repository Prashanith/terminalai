import express from "express";
import bardRouter from "./bard/bard.js";

const api = () => {
  const router = express.Router();

  router.get("/", (req, res, next) =>
    res.json("Terminal AI is up and running")
  );

  router.use("/bard", bardRouter);

  return router;
};

export default api;
