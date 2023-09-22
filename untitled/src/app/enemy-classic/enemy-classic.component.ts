import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-enemy-classic',
  templateUrl: './enemy-classic.component.html',
  styleUrls: ['./enemy-classic.component.css']
})
export class EnemyClassicComponent implements AfterViewInit{

  @ViewChild("enemyDiv") _enemy: ElementRef;

  public _startPosX = Math.random()*window.innerWidth-25;
  public _startPosY = Math.random()*window.innerHeight-45;

  public _x: number;
  public _y: number;

  public _speed: number;

  public imageSourses: string[] = [
    "assets/Image/EnemyClassic.png",
    "assets/Image/EnemyClassic2.png"
  ]

  constructor() {
    this._x = this._startPosX;
    this._y = this._startPosY;

    this._speed = Math.floor(Math.random() * (10 - 50 + 1) + 50);

    this._enemy = ViewChild("enemyDiv");
  }

  ngAfterViewInit(): void {
    console.log(`Window inner width: ${window.innerWidth}`);
    console.log(`Window inner height: ${window.innerHeight}`);

    this.moveEnemyLogic();
    this.moveEnemyAnimation();
  }

  moveEnemyAnimation() {
    let status: boolean = true;
    setInterval(function (_object: EnemyClassicComponent) {

      _object._enemy.nativeElement.src =
        status ? _object.imageSourses[0] : _object.imageSourses[1];

      status = !status;

    }, 250, this)
  }

  moveEnemyLogic(){

    setInterval(function(_object:EnemyClassicComponent) {

      TopLeftPositionMoveLogic(_object);

      BottomLeftPositionMoveLogic(_object);

      TopRightPositionMoveLogic(_object);

      BottomRightPositionMoveLogic(_object);

      _object._enemy.nativeElement.style.top = _object._y + "px";
      _object._enemy.nativeElement.style.left = _object._x + "px";

    }, this._speed, this)
  }
}

function TopLeftPositionMoveLogic(_object:EnemyClassicComponent) {
  if (_object._startPosX < window.innerWidth / 2 && _object._startPosY < window.innerHeight / 2) {
    if (_object._x < window.innerWidth / 2) {
      _object._x++;
    }
    if (_object._y < window.innerHeight / 2) {
      _object._y++;
    }
    if ((_object._y >= window.innerHeight / 2) && (_object._x >= window.innerWidth / 2)) {
      updateCoordinates(_object);
    }
  }
}

function BottomLeftPositionMoveLogic(_object:EnemyClassicComponent) {
  if (_object._startPosX > window.innerWidth / 2 && _object._startPosY < window.innerHeight / 2) {
    if (_object._x > window.innerWidth / 2) {
      _object._x--;
    }
    if (_object._y < window.innerHeight / 2) {
      _object._y++;
    }
    if ((_object._y >= window.innerHeight / 2) && (_object._x <= window.innerWidth / 2)) {
      updateCoordinates(_object);
    }
  }
}

function TopRightPositionMoveLogic(_object:EnemyClassicComponent) {
  if (_object._startPosX < window.innerWidth / 2 && _object._startPosY > window.innerHeight / 2) {
    if (_object._x < window.innerWidth / 2) {
      _object._x++;
    }
    if (_object._y > window.innerHeight / 2) {
      _object._y--;
    }
    if ((_object._y <= window.innerHeight / 2) && (_object._x >= window.innerWidth / 2)) {
      updateCoordinates(_object);
    }
  }
}

function BottomRightPositionMoveLogic(_object:EnemyClassicComponent) {
  if (_object._startPosX > window.innerWidth / 2 && _object._startPosY > window.innerHeight / 2) {
    if (_object._x > window.innerWidth / 2) {
      _object._x--;
    }
    if (_object._y > window.innerHeight / 2) {
      _object._y--;
    }
    if ((_object._y < window.innerHeight / 2) && (_object._x < window.innerWidth / 2)) {
      updateCoordinates(_object);
    }
  }
}

function updateCoordinates(_object:EnemyClassicComponent){
  _object._startPosX = Math.random() * window.innerWidth;
  _object._startPosY = Math.random() * window.innerHeight;
  _object._x = _object._startPosX;
  _object._y = _object._startPosY;
}
