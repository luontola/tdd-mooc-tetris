import { expect } from "chai";

class RotatingShape {
  #shape;

  constructor(shape) {
    this.#shape = shape.replaceAll(" ", "");
  }

  toString() {
    return this.#shape + "\n";
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
