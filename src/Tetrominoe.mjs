import {RotatingShape} from "./RotatingShape.mjs";

export class Tetrominoe {
  static T_SHAPE = new Tetrominoe(
    `.T.
     TTT
     ...`, 0, 4);
  static I_SHAPE = new Tetrominoe(
    `.....
     .....
     IIII.
     .....
     .....`, 0, 2);

  #currentOrientation;
  #orientations;

  constructor(initialShape, currentOrientation, orientations) {
    if (initialShape === null) {
      this.#currentOrientation = (currentOrientation + orientations.length) % orientations.length;
      this.#orientations = orientations;
    } else {
      const shape = new RotatingShape(initialShape);
      this.#currentOrientation = currentOrientation;
      this.#orientations = [
        shape,
        shape.rotateRight(),
        shape.rotateRight().rotateRight(),
        shape.rotateRight().rotateRight().rotateRight()
      ].slice(0, orientations)
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
