import { shapeToString } from "./shapes.mjs";

export class Block {
  #color;

  constructor(color) {
    this.#color = color;
  }

  width() {
    return 1;
  }

  height() {
    return 1;
  }

  blockAt(row, col) {
    if (row === 0 && col === 0) {
      return this.#color;
    }
  }

  toString() {
    return shapeToString(this);
  }
}
