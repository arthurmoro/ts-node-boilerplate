import { Router } from "express";
import { example } from "./example";


const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({ status: "Up and Running" });
});

router.use("/example", example);

export { router }