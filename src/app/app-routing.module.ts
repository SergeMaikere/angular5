import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { MainViewComponent } from './main-view/main-view.component';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
	{path: 'auth', component: AuthComponent},
	{path: 'blog', canActivate: [AuthGuard], component: PostListComponent},
	{path: 'blog/:id', canActivate: [AuthGuard], component: SinglePostComponent},
	{path: '', component: MainViewComponent},
	{path: 'not-found', component: FourOFourComponent},
	{path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
