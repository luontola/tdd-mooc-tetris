import { expect } from "chai";
import { Board } from "../src/Board.js";
import "./testing.js";

describe("Falling blocks", () => {
  let board;
  beforeEach(() => {
    board = new Board(3, 3);
  });

  it("The board starts empty", () => {
    expect(board.toString()).to.look(
      `...
       ...
       ...`
    );
  });

  describe("When a block is dropped", () => {
    beforeEach(() => {
      board.drop("X");
    });

    it("it starts from the top middle", () => {
      expect(board.toString()).to.look(
        `.X.
         ...
         ...`
      );
    });

    it("it moves down one row per tick", () => {
      board.tick();

      expect(board.toString()).to.look(
        `...
         .X.
         ...`
      );
    });
  });
});
