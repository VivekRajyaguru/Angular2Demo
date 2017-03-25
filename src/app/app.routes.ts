import { Routes } from '@angular/router';

import {HomeComponent} from './Home/home.component';

export const routes: Routes = [
  { path: 'app', component: HomeComponent },
  { path: '**', redirectTo:'app'}
];

