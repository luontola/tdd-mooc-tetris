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

  size() {
    return this.#shape.length;
  }

  toString() {
    return this.#shape.map((row) => row.join("")).join("\n") + "\n";
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
