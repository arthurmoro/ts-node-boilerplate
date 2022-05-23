import { generateUniqueId } from "../helpers";

export class Example {

  public readonly id: string;
  public name: string;
  public description?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(example: Omit<Example, 'id'>, id?: string) {
    Object.assign(this, example);
    if (!id) this.id = generateUniqueId();
    if (!this.createdAt) this.createdAt = new Date();
  }

}