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
  it("The board starts empty", () => {
    const board = new Board(3, 3);
    expect(normalize(board.toString())).to.eq(
      normalize(
        `...
         ...
         ...`
      )
    );
  });

  describe("When a block is dropped", () => {
    it("it starts from the top middle", () => {
      const board = new Board(3, 3);

      board.drop("X");

      expect(normalize(board.toString())).to.eq(
        normalize(
          `.X.
           ...
           ...`
        )
      );
    });

    it("it moves down one row per tick", () => {
      const board = new Board(3, 3);

      board.drop("X");
      board.tick();

      expect(normalize(board.toString())).to.eq(
        normalize(
          `...
           .X.
           ...`
        )
      );
    });
  });
});
