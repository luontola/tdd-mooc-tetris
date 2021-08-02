import {RotatingShape} from "./RotatingShape.mjs";

export class Tetrominoe {
  static T_SHAPE = new Tetrominoe(
    `.T.
     TTT
     ...`);

  #shape;

  constructor(shape) {
    this.#shape = new RotatingShape(shape);
  }

  toString() {
    return this.#shape.toString();
  }
}
