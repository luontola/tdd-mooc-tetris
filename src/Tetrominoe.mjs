import {RotatingShape} from "./RotatingShape.mjs";

export class Tetrominoe {
  static T_SHAPE = new Tetrominoe(
    `.T.
     TTT
     ...`);
  static I_SHAPE = new Tetrominoe(
    `.....
     .....
     IIII.
     .....
     .....`);

  #currentOrientation;
  #orientations;

  constructor(initialShape, currentOrientation, orientations) {
    if (initialShape === null) {
      this.#currentOrientation = (currentOrientation + 4) % 4;
      this.#orientations = orientations;
    } else {
      const shape = new RotatingShape(initialShape);
      this.#currentOrientation = 0;
      this.#orientations = [
        shape,
        shape.rotateRight(),
        shape.rotateRight().rotateRight(),
        shape.rotateRight().rotateRight().rotateRight()
      ]
    }
  }

  toString() {
    return this.#orientations[this.#currentOrientation].toString();
  }

  rotateRight() {
    return new Tetrominoe(null, this.#currentOrientation + 1, this.#orientations);
  }

  rotateLeft() {
    return new Tetrominoe(null, this.#currentOrientation - 1, this.#orientations);
  }
}
