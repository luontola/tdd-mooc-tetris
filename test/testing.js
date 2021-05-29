import { Assertion, expect } from "chai";

export function normalize(s) {
  return s
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .trim();
}

it("normalize", () => {
  expect(normalize("")).to.eq("");
  expect(normalize("  x  ")).to.eq("x");
  expect(normalize("   x\n   x")).to.eq("x\nx");
  expect(normalize("   x\n   x\n")).to.eq("x\nx");
});

Assertion.addMethod("look", function (expected) {
  const actual = this._obj;
  new Assertion(actual).to.be.a("string");

  const actualNorm = normalize(actual);
  const expectedNorm = normalize(expected);
  this.assert(
    actualNorm === expectedNorm,
    "expected #{this} to equal normalized #{exp} but got #{act}",
    "expected #{this} to not equal normalized #{act}",
    expectedNorm,
    actualNorm
  );
});
