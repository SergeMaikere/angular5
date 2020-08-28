import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { MainViewComponent } from './main-view/main-view.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
	{path: 'auth', component: AuthComponent},
	{path: 'blog', component: MainViewComponent},
	{path: 'blog/:id', component: SinglePostComponent},
	{path: '', component: MainViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
