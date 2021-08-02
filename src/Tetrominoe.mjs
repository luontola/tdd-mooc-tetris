import {RotatingShape} from "./RotatingShape.mjs";

export class Tetrominoe {
  static T_SHAPE = new Tetrominoe(0, 4,
    `.T.
     TTT
     ...`);
  static I_SHAPE = new Tetrominoe(0, 2,
    `.....
     .....
     IIII.
     .....
     .....`);

  #currentOrientation;
  #orientations;

  constructor(currentOrientation, orientations, initialShape) {
    if (typeof initialShape === "string") {
      this.#currentOrientation = currentOrientation;
      const shape = new RotatingShape(initialShape);
      this.#orientations = [
        shape,
        shape.rotateRight(),
        shape.rotateRight().rotateRight(),
        shape.rotateRight().rotateRight().rotateRight()
      ].slice(0, orientations)
    } else {
      this.#currentOrientation = (currentOrientation + orientations.length) % orientations.length;
      this.#orientations = orientations;
    }
  }

  toString() {
    return this.#orientations[this.#currentOrientation].toString();
  }

  rotateRight() {
    return new Tetrominoe(this.#currentOrientation + 1, this.#orientations);
  }

  rotateLeft() {
    return new Tetrominoe(this.#currentOrientation - 1, this.#orientations);
  }
}
