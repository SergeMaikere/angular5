import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post: any;

  constructor ( 
  	private postService: PostService, 
  	private route: ActivatedRoute, 
  	private router: Router ) {

  }

  ngOnInit(): void {
  	const id = this.route.snapshot.params['id'];
  	this.postService.getPostById(+id).then( (data) => this.post = data )
  }

  goBack () { this.router.navigate(['blog']) }

}
