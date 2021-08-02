import {expect} from "chai";

class RotatingShape {
  #shape;

  constructor(shape) {
    if (typeof shape === "string") {
      this.#shape = shape
        .replaceAll(" ", "")
        .trim()
        .split("\n")
        .map(row => row.split(""))
    } else {
      this.#shape = shape
    }
  }

  toString() {
    return this.#shape
      .map(row => row.join(""))
      .join("\n") + "\n";
  }

  rotateRight() {
    /*
      row,col  => row,col
      0,0         0,2
      0,1         1,2
      0,2         2,2
      1,0         0,1
      1,1         1,1
      1,2         2,1
     */
    const dimensions = this.#shape.length;
    const rotated = new Array(dimensions);
    for (let row = 0; row < dimensions; row++) {
      rotated[row] = new Array(dimensions);
    }
    for (let row = 0; row < dimensions; row++) {
      for (let col = 0; col < dimensions; col++) {
        rotated[col][dimensions - 1 - row] = this.#shape[row][col];
      }
    }
    return new RotatingShape(rotated);
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight();
  }
}

describe("Rotating 3x3 shape", () => {
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
  })

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `GDA
       HEB
       IFC`
    );
  })

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `CFI
       BEH
       ADG`
    );
  })
})
