import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: false
})
export class FeedPage {
  slideOpts = {
    slidesPerView: 4.5,
    spaceBetween: 10
  };

  stories = [
    { id: 1, user: 'Carlos', image: 'assets/user1.jpg' },
    { id: 2, user: 'Maria', image: 'assets/user2.jpg' },
    { id: 3, user: 'Juan', image: 'assets/user3.jpg' }
  ];

  posts = [
    { id: 1, user: 'Carlos', content: 'assets/post1.jpg' },
    { id: 2, user: 'Maria', content: 'assets/post2.jpg' },
    { id: 3, user: 'Juan', content: 'assets/post3.jpg' }
  ];
}
