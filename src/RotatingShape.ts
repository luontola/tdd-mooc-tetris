import { Shape, shapeToString } from "./shapes";

function newSquareArray(size: number): any[][] {
  const array = new Array(size);
  for (let row = 0; row < size; row++) {
    array[row] = new Array(size);
  }
  return array;
}

export class RotatingShape implements Shape {
  #shape: string[][];

  constructor(shape: string | string[][]) {
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

  blockAt(row: number, col: number) {
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
