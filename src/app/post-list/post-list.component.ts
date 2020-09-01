import { Component, OnInit } from '@angular/core';
import Post from '../models/post.js';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor( private postService: PostService) { }


  allPosts: Post[];

  ngOnInit(): void {
  	this.allPosts = this.postService.allPosts;
  	this.postService.emitPostSubject();
  }

}
