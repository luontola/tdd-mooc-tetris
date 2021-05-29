import { expect } from "chai";
import { Board } from "../src/Board.js";

function normalize(s) {
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

describe("Falling blocks", () => {
  it("the board starts empty", () => {
    const board = new Board(3, 3);
    expect(normalize(board.toString())).to.eq(
      normalize(
        `...
         ...
         ...`
      )
    );
  });
});
