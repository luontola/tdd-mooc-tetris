import {RotatingShape} from "./RotatingShape.mjs";

export class Tetromino {
  static T_SHAPE = new Tetromino(
    0,
    4,
    `.T.
     TTT
     ...`
  );
  static I_SHAPE = new Tetromino(
    0,
    2,
    `.....
     .....
     IIII.
     .....
     .....`
  );
  static O_SHAPE = new Tetromino(
    0,
    1,
    `.OO
     .OO
     ...`
  );

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
        shape.rotateRight().rotateRight().rotateRight(),
      ].slice(0, orientations);
    } else {
      this.#currentOrientation =
        (currentOrientation + orientations.length) % orientations.length;
      this.#orientations = orientations;
    }
  }

  cellAt(row, col) {
    return "Z"; // TODO
  }

  size() {
    return this.#orientations[0].size();
  }

  toString() {
    return this.#orientations[this.#currentOrientation].toString();
  }

  rotateRight() {
    return new Tetromino(this.#currentOrientation + 1, this.#orientations);
  }

  rotateLeft() {
    return new Tetromino(this.#currentOrientation - 1, this.#orientations);
  }
}
