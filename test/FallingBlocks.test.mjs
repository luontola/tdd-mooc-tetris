import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";

describe("Falling blocks", () => {
  let board;
  beforeEach(() => {
    board = new Board(3, 3);
  });

  test("The board starts empty", () => {
    expect(board.toString()).to.equalShape(
      `...
       ...
       ...`
    );
  });

  /*
  describe("When a block is dropped", () => {
    beforeEach(() => {
      board.drop("X");
    });

    test("it starts from the top middle", () => {
      expect(board.toString()).to.equalShape(
        `.X.
         ...
         ...`
      );
    });

    test.skip("it moves down one row per tick", () => {
      board.tick();

      expect(board.toString()).to.equalShape(
        `...
         .X.
         ...`
      );
    });

    test.skip("at most one block may be falling at a time", () => {
      const before = board.toString();
      expect(() => board.drop("Y")).to.throw("already falling");
      const after = board.toString();
      expect(after).to.equal(before);
    });
  });
  */

  /*
  describe("When a block reaches the bottom", () => {
    beforeEach(() => {
      board.drop("X");
      board.tick();
      board.tick();
    });

    test("it is still moving on the last row", () => {
      expect(board.toString()).to.equalShape(
        `...
         ...
         .X.`
      );
      expect(board.hasFalling(), "the player should still be able to move the block").to.be.true;
    });

    test.skip("it stops when it hits the bottom", () => {
      board.tick();

      expect(board.toString()).to.equalShape(
        `...
         ...
         .X.`
      );
      expect(board.hasFalling(), "the block should stop moving").to.be.false;
    });
  });
  */

  /*
  describe("When a block lands on another block", () => {
    beforeEach(() => {
      board.drop("X");
      board.tick();
      board.tick();
      board.tick();
      board.drop("Y");
      board.tick();
    });

    test("it is still moving on the row above the other block", () => {
      expect(board.toString()).to.equalShape(
        `...
         .Y.
         .X.`
      );
      expect(board.hasFalling(), "the player should still be able to move the block").to.be.true;
    });

    test.skip("it stops when it hits the other block", () => {
      board.tick();

      expect(board.toString()).to.equalShape(
        `...
         .Y.
         .X.`
      );
      expect(board.hasFalling(), "the block should stop moving").to.be.false;
    });
  });
  */
});
