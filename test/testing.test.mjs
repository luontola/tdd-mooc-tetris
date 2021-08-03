import { expect } from "chai";
import { normalize } from "./testing.mjs";

it("normalize", () => {
  expect(normalize("")).to.equal("\n");
  expect(normalize("  x  ")).to.equal("x\n");
  expect(normalize("   x\n   x")).to.equal("x\nx\n");
  expect(normalize("   x\n   x\n")).to.equal("x\nx\n");
  expect(normalize("\n   x\n   x")).to.equal("x\nx\n");
});
