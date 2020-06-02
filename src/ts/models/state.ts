export class State {
  private _score: number;
  private _current: Array<number>;
  private _currentPosition: number;
  private _currentRotation: number;

  constructor() {
    this._score = 0;
    this._current = [];
    this._currentPosition = 4;
    this._currentRotation = 0;
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
