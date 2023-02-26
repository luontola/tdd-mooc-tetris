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
    const newShape = newSquareArray(this.#shape.length);
    for (let row = 0; row < newShape.length; row++) {
      for (let column = 0; column < newShape[row].length; column++) {
        newShape[row][column] = this.#shape[2 - column][row];
      }
    }
    return new RotatingShape(newShape);
  }
}
