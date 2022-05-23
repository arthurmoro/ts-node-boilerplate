import { NextFunction, Request, Response, Router } from "express";
import { handleError } from "../../helpers/errors";

const example = Router();

example.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ status: "This is an example" });
  } catch (err) {
    const { status, message } = handleError(res, err);
    return res.status(status).json({ message });
  }
})
example.post("/", (req, res) => {
  return res.status(200).json({ status: "Imagine that you've just posted an example" });
})

export {
  example
}