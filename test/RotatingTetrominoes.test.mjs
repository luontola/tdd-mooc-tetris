import {expect} from "chai";
import {Tetrominoe} from "../src/Tetrominoe.mjs";

function distinctOrientations(shape) {
  let current = shape;
  let distinct = new Set();
  for (let i = 0; i < 10; i++) {
    distinct.add(current.toString());
    distinct.add(current.rotateLeft().toString());
    current = current.rotateRight();
  }
  return distinct;
}

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

  it("has 4 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(4);
  });
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

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `..I..
       ..I..
       ..I..
       ..I..
       .....`
    );
  })

  it("has 2 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(2);
  });
})
