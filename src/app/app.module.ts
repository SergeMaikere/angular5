import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { AuthComponent } from './auth/auth.component';
import { MainViewComponent } from './main-view/main-view.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { Constantes } from './services/constantes.service';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    MainViewComponent,
    SinglePostComponent,
    FourOFourComponent,
    LoginComponent,
    SignInComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PostService, 
    AuthService, 
    AuthGuard,
    Constantes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
