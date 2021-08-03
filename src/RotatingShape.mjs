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

  constructor(shape) {
    if (typeof shape === "string") {
      this.#shape = shape
        .replaceAll(" ", "")
        .trim()
        .split("\n")
        .map((row) => row.split(""));
    } else {
      this.#shape = shape;
    }
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
      for (let col = 0; col < size; col++) {
        rotated[col][size - 1 - row] = this.#shape[row][col];
      }
    }
    return new RotatingShape(rotated);
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight();
  }
}
