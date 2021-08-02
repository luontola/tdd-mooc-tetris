import {RotatingShape} from "./RotatingShape.mjs";

export class Tetrominoe {
  static T_SHAPE = new Tetrominoe(
    `.T.
     TTT
     ...`);

  #shape;

  constructor(shape) {
    if (typeof shape === "string") {
      this.#shape = new RotatingShape(shape);
    } else {
      this.#shape = shape;
    }
  }

  toString() {
    return this.#shape.toString();
  }

  rotateRight() {
    return new Tetrominoe(this.#shape.rotateRight());
  }

  rotateLeft() {
    return new Tetrominoe(this.#shape.rotateLeft());
  }
}
