import { Router } from "express";
import { getCode } from "../../services/bardService/bardService.js";
import { HttpResponse } from "../../models/response.js";

const bardRouter = Router();

bardRouter.get("/chat", (req, res, next) => {
  return res.json({ data: "Hello Bro Chat" });
});

bardRouter.post("/code", async (req, res, next) => {
  const response = await getCode(req.body.message, req.body.count ?? 1);
  return HttpResponse.ok(res, response);
});

export default bardRouter;
