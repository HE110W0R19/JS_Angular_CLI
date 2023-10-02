export class Points {
  public _startPosX: number;
  public _startPosY: number;

  public _CurrentPosX: number;
  public _CurrentPosY: number;

  constructor(startPosX?: number, startPosY?: any);
  constructor(startPosX: number, startPosY: number) {
    this._startPosX = startPosX;
    this._startPosY = startPosY;

    this._CurrentPosX = this._startPosX;
    this._CurrentPosY = this._startPosY;
  }
}
