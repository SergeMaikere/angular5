import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  constructor( private postService: PostService ) { }

  @Input() title: string;
  @Input() content: string;
  @Input() date: Date;
  @Input() loveIts: number;
  @Input() index: number;
  @Input() id: number;

  ngOnInit(): void {
  }

  onLike () { this.postService.addOneLike(this.index) }
  onDislike () { this.postService.removeOneLike(this.index ) }

}
