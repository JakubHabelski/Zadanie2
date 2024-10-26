import { Routes } from '@angular/router';
import path from 'node:path';
import {Widok1Component} from './widok1/widok1.component';
import {Widok2Component} from './widok2/widok2.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  {path: "widok1", component: Widok1Component},
  {path: "widok2", component: Widok2Component},

];
