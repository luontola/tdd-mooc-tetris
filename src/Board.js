export class Board {
  #width;
  #height;
  #fallingBlock;
  #fallingRow;
  #fallingCol;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  drop(block) {
    this.#fallingBlock = block;
    this.#fallingRow = 0;
    this.#fallingCol = 1;
  }

  toString() {
    let s = "";
    for (let row = 0; row < this.#height; row++) {
      for (let col = 0; col < this.#width; col++) {
        if (
          this.#fallingBlock &&
          row === this.#fallingRow &&
          col === this.#fallingCol
        ) {
          s += "X";
        } else {
          s += ".";
        }
      }
      s += "\n";
    }
    return s;
  }
}
