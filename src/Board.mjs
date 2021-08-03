import { shapeToString } from "./shapes.mjs";

const EMPTY = ".";

export class Board {
  #width;
  #height;
  #falling = null;
  #fallingRow;
  #fallingCol;
  #immobile;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
    this.#immobile = new Array(height);
    for (let row = 0; row < height; row++) {
      this.#immobile[row] = new Array(width).fill(EMPTY);
    }
  }

  drop(piece) {
    if (this.#falling) {
      throw new Error("another piece is already falling");
    }
    this.#falling = piece;
    this.#fallingRow = 0;
    this.#fallingCol = Math.floor((this.#width - piece.width()) / 2);
  }

  tick() {
    if (!this.hasFalling()) {
      return;
    }
    if (this.#fallingWouldHitFloor() || this.#fallingWouldHitImmobile()) {
      this.#stopFalling();
    } else {
      this.#fallingRow++;
    }
  }

  #fallingWouldHitFloor() {
    let nextRow = this.#fallingRow + 1;
    return nextRow >= this.#height;
  }

  #fallingWouldHitImmobile() {
    let nextRow = this.#fallingRow + 1;
    let nextCol = this.#fallingCol;
    return this.#immobile[nextRow][nextCol] !== EMPTY;
  }

  #stopFalling() {
    for (let row = 0; row < this.height(); row++) {
      for (let col = 0; col < this.width(); col++) {
        this.#immobile[row][col] = this.blockAt(row, col);
      }
    }
    this.#falling = null;
  }

  hasFalling() {
    return this.#falling !== null;
  }

  width() {
    return this.#width;
  }

  height() {
    return this.#height;
  }

  blockAt(row, col) {
    if (
      this.#falling &&
      row >= this.#fallingRow &&
      row < this.#fallingRow + this.#falling.height() &&
      col >= this.#fallingCol &&
      col < this.#fallingCol + this.#falling.width()
    ) {
      return this.#falling.blockAt(
        row - this.#fallingRow,
        col - this.#fallingCol
      );
    } else {
      return this.#immobile[row][col];
    }
  }

  toString() {
    return shapeToString(this);
  }
}
