import { ExampleRepository } from "../../../repository/Example/ExampleRepository";
import { AddExampleType } from "./AddExampleType";
import { Example } from "../../../entities/Example";

export class AddExample {

  constructor(private exampleRepository: ExampleRepository) { };

  async execute(data: AddExampleType): Promise<void> {

    if (!(await this.exampleRepository.getExampleByName(data.name))) {
      throw new Error("Example already given")
    }

    const example = new Example(data);

    return this.exampleRepository.addExample(example);
  }
}