import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyClassicComponent } from './enemy-classic.component';

describe('EnemyClassicComponent', () => {
  let component: EnemyClassicComponent;
  let fixture: ComponentFixture<EnemyClassicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnemyClassicComponent]
    });
    fixture = TestBed.createComponent(EnemyClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
