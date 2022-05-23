import { Example } from "../../../entities/Example";
import { ExampleRepository } from "../../../repository/Example/ExampleRepository";

export class ListExamples {
  constructor(private exampleRepository: ExampleRepository) { }

  execute(page?: number, limit?: number): Promise<Example[] | null> {
    return this.exampleRepository.getPaginatedExample(page || 0, limit || 10);
  }
}