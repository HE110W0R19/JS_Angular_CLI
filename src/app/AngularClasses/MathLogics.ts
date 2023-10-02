import {Points} from "./Points";

export class EnemyReplacePosLogic{

  public coordinates: Points;

  public getCoordinates (){
    return this.coordinates;
  }

  constructor(inputPints?: any);
  constructor(inputPoints: Points) {
    this.coordinates = inputPoints;
  }

  TopLeftPositionMoveLogic() {
    if (this.coordinates._startPosX < window.innerWidth / 2 && this.coordinates._startPosY < window.innerHeight / 2) {
      if (this.coordinates._CurrentPosX < window.innerWidth / 2) {
        this.coordinates._CurrentPosX++;
      }
      if (this.coordinates._CurrentPosY < window.innerHeight / 2) {
        this.coordinates._CurrentPosY++;
      }
      if ((this.coordinates._CurrentPosY >= window.innerHeight / 2) && (this.coordinates._CurrentPosX >= window.innerWidth / 2)) {
        this.UpdateCoordinates()
      }
    }
  }

  BottomLeftPositionMoveLogic() {
    if (this.coordinates._startPosX > window.innerWidth / 2 && this.coordinates._startPosY < window.innerHeight / 2) {
      if (this.coordinates._CurrentPosX > window.innerWidth / 2) {
        this.coordinates._CurrentPosX--;
      }
      if (this.coordinates._CurrentPosY < window.innerHeight / 2) {
        this.coordinates._CurrentPosY++;
      }
      if ((this.coordinates._CurrentPosY >= window.innerHeight / 2) && (this.coordinates._CurrentPosX <= window.innerWidth / 2)) {
        this.UpdateCoordinates()
      }
    }
  }

  TopRightPositionMoveLogic() {
    if (this.coordinates._startPosX < window.innerWidth / 2 && this.coordinates._startPosY > window.innerHeight / 2) {
      if (this.coordinates._CurrentPosX < window.innerWidth / 2) {
        this.coordinates._CurrentPosX++;
      }
      if (this.coordinates._CurrentPosY > window.innerHeight / 2) {
        this.coordinates._CurrentPosY--;
      }
      if ((this.coordinates._CurrentPosY <= window.innerHeight / 2) && (this.coordinates._CurrentPosX >= window.innerWidth / 2)) {
        this.UpdateCoordinates();
      }
    }
  }

  BottomRightPositionMoveLogic() {
    if (this.coordinates._startPosX > window.innerWidth / 2 && this.coordinates._startPosY > window.innerHeight / 2) {
      if (this.coordinates._CurrentPosX > window.innerWidth / 2) {
        this.coordinates._CurrentPosX--;
      }
      if (this.coordinates._CurrentPosY > window.innerHeight / 2) {
        this.coordinates._CurrentPosY--;
      }
      if ((this.coordinates._CurrentPosY < window.innerHeight / 2) && (this.coordinates._CurrentPosX < window.innerWidth / 2)) {
        this.UpdateCoordinates();
      }
    }
  }

  private UpdateCoordinates(){
    this.coordinates._startPosX = Math.random() * window.innerWidth;
    this.coordinates._startPosY = Math.random() * window.innerHeight;
    this.coordinates._CurrentPosX = this.coordinates._startPosX;
    this.coordinates._CurrentPosY = this.coordinates._startPosY;
  }
}
