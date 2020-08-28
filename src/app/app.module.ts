import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { AuthComponent } from './auth/auth.component';
import { MainViewComponent } from './main-view/main-view.component';

import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { SinglePostComponent } from './single-post/single-post.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    MainViewComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    //CommonModule,
    AppRoutingModule
  ],
  providers: [PostService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
