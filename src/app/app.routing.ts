import { RouterModule } from '@angular/router';
import { Home } from './home.component';
import { About } from './about.component';
import { NotFound } from './notfound.component';

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, data: { state: 'home'} },
  { path: 'about', component: About, data: { state: 'about'} },
  { path: '**', component: NotFound }
];

export const AppRouting = RouterModule.forRoot(routes, { 
  useHash: true
});