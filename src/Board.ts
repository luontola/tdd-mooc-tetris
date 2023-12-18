import { Shape, shapeToString } from "./shapes";
import { Block } from "./Block";

const EMPTY = ".";

class Point {
  row: number;
  col: number;

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }
}

class MovableShape implements Shape {
  #shape: Shape;
  #row: number;
  #col: number;

  constructor(shape: Shape, row: number, col: number) {
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

  blockAt(row: number, col: number) {
    if (
      row >= this.#row &&
      row < this.height() &&
      col >= this.#col &&
      col < this.width()
    ) {
      return this.#shape.blockAt(row - this.#row, col - this.#col);
    } else {
      return EMPTY;
    }
  }

  height() {
    return this.#row + this.#shape.height();
  }

  width() {
    return this.#col + this.#shape.width();
  }
}

export class Board implements Shape {
  #width: number;
  #height: number;
  #falling: MovableShape | null = null;
  #immobile: string[][];

  constructor(width: number, height: number) {
    this.#width = width;
    this.#height = height;
    this.#immobile = new Array(height);
    for (let row = 0; row < height; row++) {
      this.#immobile[row] = new Array(width).fill(EMPTY);
    }
  }

  drop(piece: Shape | string) {
    if (typeof piece === "string") {
      // enables clearing level 1 without premature introducing a Block class
      piece = new Block(piece);
    }
    if (this.#falling) {
      throw new Error("another piece is already falling");
    }
    this.#falling = new MovableShape(
      piece,
      0,
      Math.floor((this.#width - piece.width()) / 2)
    );
  }

  tick() {
    if (!this.hasFalling()) {
      return;
    }
    const attempt = this.#falling!.moveDown();
    if (this.#hitsFloor(attempt) || this.#hitsImmobile(attempt)) {
      this.#stopFalling();
    } else {
      this.#falling = attempt;
    }
  }

  #hitsFloor(falling: MovableShape) {
    for (const block of falling.nonEmptyBlocks()) {
      if (block.row >= this.#height) {
        return true;
      }
    }
    return false;
  }

  #hitsImmobile(falling: MovableShape) {
    for (const block of falling.nonEmptyBlocks()) {
      if (this.#immobile[block.row][block.col] !== EMPTY) {
        return true;
      }
    }
    return false;
  }

  #stopFalling() {
    for (let row = 0; row < this.height(); row++) {
      for (let col = 0; col < this.width(); col++) {
        this.#immobile[row][col] = this.blockAt(row, col) as string;
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

  blockAt(row: number, col: number) {
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
