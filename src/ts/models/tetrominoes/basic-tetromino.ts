export class BasicTetromino {
  protected readonly _color: string;
  protected readonly _defaultWidth: number;
  protected _positions: Array<Array<number>> = [];

  constructor(defaultWidth: number, color: string) {
    this._defaultWidth = defaultWidth;
    this._color = color;
  }

  public get color() {
    return this._color;
  }
}

export interface Tetromino {
  getPositions: (width?: number) => number[][];
  color: string;
}
