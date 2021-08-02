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
})
