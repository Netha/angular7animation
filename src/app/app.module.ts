//our root app component
import { Component, NgModule, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouting } from './app.routing';
import { Home } from './home.component';
import { About } from './about.component';
import { NotFound } from './notfound.component';
import { routerTransition } from './router.animations';

@Component({
  selector: 'my-app',
  animations: [ routerTransition ],
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>
    <main [@routerTransition]="getState(o)">
      <router-outlet #o="outlet"></router-outlet>
    </main>
  `
})
export class App {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, AppRouting ],
  declarations: [ App, Home, About, NotFound ],
  bootstrap: [ App ]
})
export class AppModule { }