import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'My Cool Posts';

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
  
}
