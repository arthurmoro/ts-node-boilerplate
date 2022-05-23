import { Example } from "../../entities/Example";
import { ExampleRepository } from "./ExampleRepository";

export class ExampleRepositoryInMemory implements ExampleRepository {
  private examples: Example[] = [];

  async getExampleById(id: string): Promise<Example | null> {
    const res = this.examples.filter(example => example.id === id);
    return res && res.length > 0 && res[0] || null;
  }

  async getExampleByName(name: string): Promise<Array<Example>> {
    return this.examples.filter(_example => _example.name.includes(name));
  }

  async getPaginatedExample(page: number, quantity: number, fields?: Array<{ "field": "value", "value": "value" }>): Promise<Array<Example>> {
    let examples = this.examples;

    if (fields) {
      examples = examples.filter(_example => {
        fields.map(field => _example[field.field]?.includes(field.value))
      });
    }

    return examples.slice(page * quantity, quantity);
  }

  async updateExample(example: Example, id: string): Promise<void> {
    this.examples = this.examples.map(_example => {
      if (_example.id === id) {
        Object.assign(_example, example);
      }
      return _example;
    })

  }

  async addExample(example: Example): Promise<void> {
    this.examples.push(example);
  }
}