import { expect } from "chai";
import { RotatingShape } from "../src/RotatingShape.mjs";

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

describe("Rotating 5x5 shapes", () => {
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

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `UPKFA
       VQLGB
       WRMHC
       XSNID
       YTOJE`
    );
  });
});