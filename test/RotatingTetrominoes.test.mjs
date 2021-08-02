import {expect} from "chai";
import {Tetrominoe} from "../src/Tetrominoe.mjs";

describe("The T shape", () => {
  const shape = Tetrominoe.T_SHAPE;

  it("is shaped like T", () => {
    expect(shape.toString()).to.equalShape(
      `.T.
       TTT
       ...`
    );
  })

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `.T.
       .TT
       .T.`
    );
  })

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `.T.
       TT.
       .T.`
    );
  })
})

describe("The I shape", () => {
  const shape = Tetrominoe.I_SHAPE;

  it("is shaped like I", () => {
    expect(shape.toString()).to.equalShape(
      `.....
       .....
       IIII.
       .....
       .....`
    );
  })

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `..I..
       ..I..
       ..I..
       ..I..
       .....`
    );
  })
})
