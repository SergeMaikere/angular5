import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { MainViewComponent } from './main-view/main-view.component';

const routes: Routes = [
	{path: 'auth', component: AuthComponent},
	{path: 'blog', component: MainViewComponent},
	{path: '', component: MainViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
