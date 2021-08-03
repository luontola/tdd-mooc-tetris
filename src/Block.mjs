export class Block {
  #color;

  constructor(color) {
    this.#color = color;
  }

  cellAt(row, col) {
    return this.#color;
  }

  size() {
    return 1;
  }
}
