function newSquareArray(dimension) {
  const newShape = new Array(dimension);
  for (let row = 0; row < dimension; row++) {
    newShape[row] = new Array(dimension);
  }
  return newShape;
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

  toString() {
    return this.#shape.map((row) => row.join("")).join("\n") + "\n";
  }

  rotateRight() {
    const dimension = this.#shape.length;
    const newShape = newSquareArray(dimension);
    for (let row = 0; row < dimension; row++) {
      for (let column = 0; column < dimension; column++) {
        newShape[row][column] = this.#shape[dimension - 1 - column][row];
      }
    }
    return new RotatingShape(newShape);
  }
}
