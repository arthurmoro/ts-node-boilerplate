import { NextFunction, Request, Response, Router } from "express";
import { handleError } from "../../helpers/errors";
import { AddExample, ListExamples } from "../../usecase/Example";

import { ExampleRepositoryInMemory } from "../../repository/Example/ExampleRepositoryInMemory";

const example = Router();

example.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const exampleRepository = new ExampleRepositoryInMemory();
    const example = new ListExamples(exampleRepository);
    const examples = await example.execute();

    return res.status(200).json(examples);
  } catch (err) {
    const { status, message } = handleError(res, err);
    return res.status(status).json({ message });
  }
})
example.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const example = {
      name: req.body.name || "",
      description: req.body.description || "",
    }

    const exampleRepository = new ExampleRepositoryInMemory();
    const _example = new AddExample(exampleRepository);

    await _example.execute(example);
    return res.status(200).json({ status: "Imagine that you've just posted an example" });
  } catch (err) {
    const { status, message } = handleError(res, err);
    return res.status(status).json({ message });
  }
})

export {
  example
}