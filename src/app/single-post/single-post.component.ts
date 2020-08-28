import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post: Post;

  constructor ( 
  	private postService: PostService, 
  	private route: ActivatedRoute, 
  	private router: Router ) { }

  ngOnInit(): void {
  	const id = this.route.snapshot.params['id'];
  	this.post = this.postService.getPostById(+id);
  }

  goBack () { this.router.navigate(['blog']) }

}
