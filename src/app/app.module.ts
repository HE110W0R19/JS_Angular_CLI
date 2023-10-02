import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TowerComponent } from './tower/tower.component';
import { EnemyClassicComponent } from './enemy-classic/enemy-classic.component';

@NgModule({
  declarations: [
    AppComponent,
    TowerComponent,
    EnemyClassicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
