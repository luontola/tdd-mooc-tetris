/*
import { describe, test } from "vitest";
import { expect } from "chai";
import { RotatingShape } from "../src/RotatingShape.mjs";

describe("Rotating 3x3 shape", () => {
  const shape = RotatingShape.fromString(
    `ABC
     DEF
     GHI`
  );

  test("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `ABC
       DEF
       GHI`
    );
  });

  test.skip("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `GDA
       HEB
       IFC`
    );
  });

  test.skip("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `CFI
       BEH
       ADG`
    );
  });
});
*/

/*
describe("Rotating 5x5 shape", () => {
  const shape = RotatingShape.fromString(
    `ABCDE
     FGHIJ
     KLMNO
     PQRST
     UVWXY`
  );

  test("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `ABCDE
       FGHIJ
       KLMNO
       PQRST
       UVWXY`
    );
  });

  test.skip("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `UPKFA
       VQLGB
       WRMHC
       XSNID
       YTOJE`
    );
  });

  test.skip("can be rotated left/counter-clockwise", () => {
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
