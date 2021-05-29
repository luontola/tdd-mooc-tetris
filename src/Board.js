export class Board {
  #width;
  #height;
  #fallingBlock;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  drop(block) {
    this.#fallingBlock = block;
  }

  toString() {
    let s = "";
    for (let row = 0; row < this.#height; row++) {
      for (let col = 0; col < this.#width; col++) {
        if (row === 0 && col === 1 && this.#fallingBlock) {
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
