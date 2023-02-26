import { expect } from "chai";

function newSquareArray(dimension) {
  const newShape = new Array(dimension);
  for (let row = 0; row < dimension; row++) {
    newShape[row] = new Array(dimension);
  }
  return newShape;
}

class RotatingShape {
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
    newShape[0][0] = this.#shape[2][0];
    newShape[0][1] = this.#shape[1][0];
    newShape[0][2] = this.#shape[0][0];
    newShape[1][0] = this.#shape[2][1];
    newShape[1][1] = this.#shape[1][1];
    newShape[1][2] = this.#shape[0][1];
    newShape[2][0] = this.#shape[2][2];
    newShape[2][1] = this.#shape[1][2];
    newShape[2][2] = this.#shape[0][2];
    return new RotatingShape(newShape);
  }
}

describe("Rotating 3x3 shapes", () => {
  const shape = new RotatingShape(
    `ABC
     DEF
     GHI`
  );

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `ABC
       DEF
       GHI`
    );
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `GDA
       HEB
       IFC`
    );
  });
});
