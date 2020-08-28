import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  	lorem = 'Lorem ipsum aliquip minim esse cupidatat deserunt consectetur occaecat consectetur non ut duis sed ea sint esse dolore dolor ut est consectetur eiusmod amet irure laboris ut magna enim dolor minim dolor in consectetur id minim occaecat sunt eiusmod minim qui incididunt aute adipisicing exercitation voluptate fugiat ut labore est aliquip veniam ex veniam est in id laboris irure nulla irure et voluptate tempor in cupidatat in laborum fugiat ut duis in deserunt elit adipisicing dolore non voluptate ullamco sint elit sint non qui eiusmod sit ut do quis exercitation irure enim irure incididunt anim amet officia reprehenderit elit proident consequat dolore anim consectetur consequat enim qui qui elit non laboris consequat ad velit reprehenderit velit consequat elit anim culpa id incididunt fugiat ut esse minim irure adipisicing non dolore duis ut ut dolor dolor in aliquip ea anim nulla non consectetur laboris nostrud velit sed minim amet ullamco mollit et anim sunt ad in sit tempor officia commodo elit pariatur esse sed sunt consequat eiusmod et magna enim ullamco consequat exercitation laboris ad pariatur et voluptate officia esse et velit eu ullamco aliquip ut laborum occaecat aute eiusmod irure do esse velit aliquip dolore dolore mollit irure velit aute nulla adipisicing qui voluptate commodo ad tempor sunt incididunt ut reprehenderit voluptate excepteur eiusmod velit sint nulla qui in laboris sed eiusmod duis sed minim laboris excepteur in nisi in velit sunt irure et minim nostrud mollit labore magna mollit dolore officia et aute anim ut exercitation excepteur ut laborum.'

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

	addOneLike (i: number) { this.allPosts[i].loveIts++ }
	removeOneLike (i: number) { this.allPosts[i].loveIts-- }

	getPostById(id: number) { return this.allPosts.find( post => post.id === id ) }

}
