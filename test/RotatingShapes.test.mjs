import { expect } from "chai";

class RotatingShape {
  #shape;

  constructor(shape) {
    this.#shape = shape
      .replaceAll(" ", "")
      .split("\n")
      .map((row) => row.split(""));
  }

  toString() {
    return this.#shape.map((row) => row.join("")).join("\n") + "\n";
  }
}

describe("Rotating 3x3 shapes", () => {
  it("initial orientation", () => {
    const shape = new RotatingShape(
      `ABC
       DEF
       GHI`
    );

    expect(shape.toString()).to.equalShape(
      `ABC
       DEF
       GHI`
    );
  });
});
