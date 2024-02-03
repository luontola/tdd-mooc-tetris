import { shapeToString } from "./shapes.mjs";

function newSquareArray(size) {
  const array = new Array(size);
  for (let row = 0; row < size; row++) {
    array[row] = new Array(size);
  }
  return array;
}

export class RotatingShape {
  #shape;

  static fromString(shape) {
    return new RotatingShape(
      shape
        .replaceAll(" ", "")
        .trim()
        .split("\n")
        .map((row) => row.split(""))
    );
  }

  constructor(shape) {
    this.#shape = shape;
  }

  width() {
    return this.#shape[0].length;
  }

  height() {
    return this.#shape.length;
  }

  blockAt(row, col) {
    return this.#shape[row][col];
  }

  toString() {
    return shapeToString(this);
  }

  rotateRight() {
    const size = this.#shape.length;
    const rotated = newSquareArray(size);
    for (let row = 0; row < size; row++) {
      for (let column = 0; column < size; column++) {
        rotated[row][column] = this.#shape[size - 1 - column][row];
      }
    }
    return new RotatingShape(rotated);
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight();
  }
}
