import {
  Tetromino,
  ITetromino,
  LTetromino,
  OTetromino,
  TTetromino,
  ZTetromino,
} from "./tetrominoes";

export class Tetrominoes {
  private _list: Array<Tetromino> = [];

  constructor(defaultWidth: number) {
    this._list = [
      new ITetromino(defaultWidth, "#0571e5"),
      new LTetromino(defaultWidth, "#f79d65"),
      new OTetromino(defaultWidth, "#45bd62"),
      new TTetromino(defaultWidth, "#f15bb5"),
      new ZTetromino(defaultWidth, "#eb2548"),
    ];
  }

  public get list() {
    return this._list;
  }

  public getRandomTetromino() {}

  private getRandomRotation() {
    return Math.floor(Math.random() * 4);
  }
}
