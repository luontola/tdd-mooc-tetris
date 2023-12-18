import { Shape, shapeToString } from "./shapes";

export class Block implements Shape {
  #color;

  constructor(color: string) {
    this.#color = color;
  }

  width() {
    return 1;
  }

  height() {
    return 1;
  }

  blockAt(row: number, col: number) {
    if (row === 0 && col === 0) {
      return this.#color;
    }
  }

  toString() {
    return shapeToString(this);
  }
}
