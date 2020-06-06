export class State {
  private _score: number;
  private _current: Array<number>;
  private _currentPosition: number;
  private _currentRotation: number;
  private _randomTetrominoIndex: number;
  private _nextRandomTetrominoIndex: number;

  constructor(tetrominoesLength: number) {
    this._score = 0;
    this._current = [];
    this._currentPosition = 4;
    this._currentRotation = 0;
    this._randomTetrominoIndex = this.getRandomTetrominoIndex(tetrominoesLength)
    this._nextRandomTetrominoIndex = this.getRandomTetrominoIndex(tetrominoesLength)
  }

  public get score() {
    return this._score;
  }

  public get current() {
    return this._current;
  }

  public set current(tetromino: Array<number>) {
    this._current = tetromino;
  }

  public get currentPosition() {
    return this._currentPosition;
  }

  public set currentPosition(position) {
    this._currentPosition = position;
  }

  public get currentRotation() {
    return this._currentRotation;
  }

  public set currentRotation(rotation) {
    if (rotation < 0 || rotation > 3) {
      rotation = 0;
    }
    this._currentRotation = rotation;
  }

  public get randomTetrominoIndex() {
    return this._randomTetrominoIndex;
  }

  public get nextRandomTetrominoIndex() {
    return this._nextRandomTetrominoIndex;
  }

  private getRandomTetrominoIndex(length: number) {
    return Math.floor(Math.random() * length)
  }

  public getNextRandomTetrominoIndex(length: number) {
    this._randomTetrominoIndex = this._nextRandomTetrominoIndex
    this._nextRandomTetrominoIndex = this.getRandomTetrominoIndex(length)
  }

  public incrementScore() {
    this._score += 10;
  }

  public incrementPosition(i = 1) {
    this._currentPosition += i;
  }

  public incrementRotation() {
    this._currentRotation++;
  }
}
