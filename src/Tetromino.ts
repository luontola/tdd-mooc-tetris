import { RotatingShape } from "./RotatingShape";
import { Shape } from "./shapes";

export class Tetromino implements Shape {
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

  #currentOrientation: number;
  #orientations: RotatingShape[];

  constructor(
    currentOrientation: number,
    orientations: number | RotatingShape[],
    initialShape?: string
  ) {
    if (typeof initialShape === "string") {
      orientations = orientations as number;
      this.#currentOrientation = currentOrientation;
      const shape = new RotatingShape(initialShape);
      this.#orientations = [
        shape,
        shape.rotateRight(),
        shape.rotateRight().rotateRight(),
        shape.rotateRight().rotateRight().rotateRight(),
      ].slice(0, orientations as number);
    } else {
      orientations = orientations as RotatingShape[];
      this.#currentOrientation =
        (currentOrientation + orientations.length) % orientations.length;
      this.#orientations = orientations;
    }
  }

  rotateRight() {
    return new Tetromino(this.#currentOrientation + 1, this.#orientations);
  }

  rotateLeft() {
    return new Tetromino(this.#currentOrientation - 1, this.#orientations);
  }

  #shape() {
    return this.#orientations[this.#currentOrientation];
  }

  width() {
    return this.#shape().width();
  }

  height() {
    return this.#shape().height();
  }

  blockAt(row: number, col: number) {
    return this.#shape().blockAt(row, col);
  }

  toString() {
    return this.#shape().toString();
  }
}
