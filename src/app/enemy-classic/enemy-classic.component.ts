import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Points} from "../AngularClasses/Points";
import {EnemyReplacePosLogic} from "../AngularClasses/MathLogics";

@Component({
  selector: 'app-enemy-classic',
  templateUrl: './enemy-classic.component.html',
  styleUrls: ['./enemy-classic.component.css']
})

export class EnemyClassicComponent implements AfterViewInit {

    @ViewChild("enemyDiv") _enemy: ElementRef;
    private readonly Coords: Points;

    private MathLogicForMove: EnemyReplacePosLogic;

    public _speedOfEnemyMove: number;
    public _speedOfEnemyMoveAnimation: number;

    public imageSourses: string[] = [
        "assets/Image/EnemyClassic.png",
        "assets/Image/EnemyClassic2.png"
    ]

    constructor() {
        this.Coords = new Points(
            Math.random() * window.innerWidth - 25,
            Math.random() * window.innerHeight - 45
        );

        this.MathLogicForMove = new EnemyReplacePosLogic(this.Coords);

        this._speedOfEnemyMove = Math.floor(Math.random() * (10 - 50 + 1) + 50);
        this._speedOfEnemyMoveAnimation = 250;

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

        }, this._speedOfEnemyMoveAnimation, this)
    }

    moveEnemyLogic() {

        setInterval(function (_object: EnemyClassicComponent) {

            _object.MathLogicForMove.TopLeftPositionMoveLogic();

            _object.MathLogicForMove.BottomLeftPositionMoveLogic();

            _object.MathLogicForMove.TopRightPositionMoveLogic();

            _object.MathLogicForMove.BottomRightPositionMoveLogic();

            _object._enemy.nativeElement.style.top = _object.MathLogicForMove.getCoordinates()._CurrentPosY + "px";
            _object._enemy.nativeElement.style.left = _object.MathLogicForMove.getCoordinates()._CurrentPosX + "px";

        }, this._speedOfEnemyMove, this)
    }
}
