import { BasicTetromino, Tetromino } from "./basic-tetromino";

export class OTetromino extends BasicTetromino implements Tetromino {
  constructor(defaultWidth: number, color: string) {
    super(defaultWidth, color);
  }

  public getPositions(width = this._defaultWidth) {
    return (this._positions = [
      [0, 1, width, width + 1],
      [0, 1, width, width + 1],
      [0, 1, width, width + 1],
      [0, 1, width, width + 1],
    ]);
  }
}
