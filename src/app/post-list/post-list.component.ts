import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor( private postService: PostService) { }


  allPosts: any[];

  ngOnInit(): void {
  	this.allPosts = this.postService.allPosts;
  	this.postService.emitPostSubject();
  }

}
