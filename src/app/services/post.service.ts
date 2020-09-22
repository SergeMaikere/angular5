import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';
import { Constantes } from './constantes.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private constantes: Constantes) { }

  	postSubject = new Subject<any[]>();

  	lorem = this.constantes.loremMedium;

  	allPosts = [
		{
			id: 1,
			title: 'Lorem',
			content: this.lorem,
			loveIts: 7,
			created_at: new Date()
		},
		{
			id: 2,
			title: 'Lorem',
			content: this.lorem,
			loveIts: -20,
			created_at: new Date()
		},
		{
			id: 3,
			title: 'Lorem',
			content: this.lorem,
			loveIts: 15,
			created_at: new Date()
		},
		{
			id: 4,
			title: 'Lorem',
			content: this.lorem,
			loveIts: -2,
			created_at: new Date()
		},
		{
			id: 5,
			title: 'Lorem',
			content: this.lorem,
			loveIts: 0,
			created_at: new Date()
		}
	]

	emitPostSubject () { this.postSubject.next( this.allPosts.slice() ) }

	addOneLike (i: number) { 
		this.allPosts[i].loveIts++;
		this.emitPostSubject();
	}
	removeOneLike (i: number) { 
		this.allPosts[i].loveIts--;
		this.emitPostSubject();
	}

	getPostById(id: number) { 
		return new Promise(
			(resolve, reject) => {
				setTimeout( 
					()=> {
						this.emitPostSubject();
						resolve(this.allPosts.find( (post : Post) => post.id === id));
					}
					, 2000 
				)
			}
		) 
	}

}
