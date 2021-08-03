import { shapeToString } from "./shapes.mjs";

const EMPTY = ".";

class Point {
  row;
  col;

  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}

class MovableShape {
  #shape;
  #row;
  #col;

  constructor(shape, row, col) {
    this.#shape = shape;
    this.#row = row;
    this.#col = col;
  }

  moveDown() {
    return new MovableShape(this.#shape, this.#row + 1, this.#col);
  }

  nonEmptyBlocks() {
    const points = [];
    for (let row = this.#row; row < this.#row + this.#shape.height(); row++) {
      for (let col = this.#col; col < this.#col + this.#shape.width(); col++) {
        const block = this.blockAt(row, col);
        if (block !== EMPTY) {
          points.push(new Point(row, col));
        }
      }
    }
    return points;
  }

  width() {
    return this.#shape.width();
  }

  height() {
    return this.#shape.height();
  }

  blockAt(row, col) {
    if (
      row >= this.#row &&
      row < this.#row + this.#shape.height() &&
      col >= this.#col &&
      col < this.#col + this.#shape.width()
    ) {
      return this.#shape.blockAt(row - this.#row, col - this.#col);
    } else {
      return EMPTY;
    }
  }
}

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
    this.#falling = new MovableShape(
      piece,
      0,
      Math.floor((this.#width - piece.width()) / 2)
    );
    this.#fallingRow = 0;
    this.#fallingCol = Math.floor((this.#width - piece.width()) / 2);
  }

  tick() {
    if (!this.hasFalling()) {
      return;
    }
    const test = this.#falling.moveDown();
    if (this.#pieceHitsFloor(test) || this.#fallingWouldHitImmobile()) {
      this.#stopFalling();
    } else {
      this.#falling = test;
      this.#fallingRow++;
    }
  }

  #pieceHitsFloor(piece) {
    for (const block of piece.nonEmptyBlocks()) {
      if (block.row >= this.#height) {
        return true;
      }
    }
    return false;
  }

  #fallingWouldHitImmobile() {
    const nextRow = this.#fallingRow + 1;
    const nextCol = this.#fallingCol;
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
    if (this.#falling) {
      const block = this.#falling.blockAt(row, col);
      if (block !== EMPTY) {
        return block;
      }
    }
    return this.#immobile[row][col];
  }

  toString() {
    return shapeToString(this);
  }
}
