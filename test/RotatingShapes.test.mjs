
import { expect } from "chai";
import { RotatingShape } from "../src/RotatingShape.mjs";

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
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `GDA
       HEB
       IFC`
    );
  });

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `CFI
       BEH
       ADG`
    );
  });
});

/*
describe("Rotating 5x5 shape", () => {
  const shape = new RotatingShape(
    `ABCDE
     FGHIJ
     KLMNO
     PQRST
     UVWXY`
  );

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `ABCDE
       FGHIJ
       KLMNO
       PQRST
       UVWXY`
    );
  });

  xit("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `UPKFA
       VQLGB
       WRMHC
       XSNID
       YTOJE`
    );
  });

  xit("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `EJOTY
       DINSX
       CHMRW
       BGLQV
       AFKPU`
    );
  });
});
*/
