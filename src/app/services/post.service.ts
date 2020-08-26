import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  	lorem = 'Eiusmod tempor culpa sed amet aute aliqua tempor esse est ullamco laboris do mollit aute aute occaecat culpa magna pariatur mollit.';

  	allPosts = [
		{
			title: 'Lorem',
			content: this.lorem,
			loveIts: 7,
			created_at: new Date()
		},
		{
			title: 'Lorem',
			content: this.lorem,
			loveIts: -20,
			created_at: new Date()
		},
		{
			title: 'Lorem',
			content: this.lorem,
			loveIts: 15,
			created_at: new Date()
		},
		{
			title: 'Lorem',
			content: this.lorem,
			loveIts: -2,
			created_at: new Date()
		},
		{
			title: 'Lorem',
			content: this.lorem,
			loveIts: 0,
			created_at: new Date()
		}
	]

	addOneLike (i: number) { this.allPosts[i].loveIts++ }
	removeOneLike (i: number) { this.allPosts[i].loveIts-- }

}
