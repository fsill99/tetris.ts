export class Settings {
  private _width: number;
  private _msInterval: number;
  private readonly _displayWidth: number;
  private readonly _displayIndex: number;

  constructor(
    width = 10,
    msInterval = 1000,
    displayWidth = 4,
    displayIndex = 0
  ) {
    this._width = width;
    this._msInterval = msInterval;
    this._displayWidth = displayWidth;
    this._displayIndex = displayIndex;
  }

  public get width() {
    return this._width;
  }

  public get msInterval() {
    return this._msInterval;
  }

  public set msInterval(ms: number) {
    this._msInterval = ms >= 10 ? ms : 10;
  }

  public get displayWidth() {
    return this._displayWidth;
  }

  public get displayIndex() {
    return this._displayIndex;
  }
}
