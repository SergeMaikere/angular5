import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  allPosts: any[];

  constructor ( private postService: PostService ) {  }

  ngOnInit() { this.allPosts = this.postService.allPosts }

}
