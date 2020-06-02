import { BasicTetromino, Tetromino } from "./basic-tetromino";

export class ITetromino extends BasicTetromino implements Tetromino {
  constructor(defaultWidth: number, color: string) {
    super(defaultWidth, color);
  }

  public getPositions(width = this._defaultWidth) {
    return (this._positions = [
      [1, width + 1, width * 2 + 1, width * 3 + 1],
      [width, width + 1, width + 2, width + 3],
      [1, width + 1, width * 2 + 1, width * 3 + 1],
      [width, width + 1, width + 2, width + 3],
    ]);
  }
}
