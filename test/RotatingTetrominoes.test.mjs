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
})
