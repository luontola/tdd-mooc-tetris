export interface Shape {
  width(): number;

  height(): number;

  blockAt(row: number, col: number): string | undefined;
}

export function shapeToString(shape: Shape) {
  let s = "";
  for (let row = 0; row < shape.height(); row++) {
    for (let col = 0; col < shape.width(); col++) {
      s += shape.blockAt(row, col);
    }
    s += "\n";
  }
  return s;
}
