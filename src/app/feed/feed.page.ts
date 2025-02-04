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
    { id: 1, user: 'Carlos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlF-8hJZWN0UkacWF_D4XKV_hmQl0DZJmXaQ&s' },
    { id: 2, user: 'Maria', image: 'https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/09/Poses-Perfil-Profesional-Mujeres-ago.-10-2023-1-819x1024.jpg?lossy=1&strip=1&webp=1' },
    { id: 3, user: 'Juan', image: 'https://labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg' },
    { id: 4, user: 'Pedro', image: 'https://i.pinimg.com/736x/38/3f/c1/383fc1f4c5b370c2071b13f5e1d31567.jpg' },
    { id: 5, user: 'Laura', image: 'https://i.pinimg.com/originals/af/9a/83/af9a83b8de74c43a5d306611c5387422.jpg' },
    { id: 6, user: 'Ana', image: 'https://media.istockphoto.com/id/1176965010/photo/portrait-of-smiling-woman-in-office.jpg' },
    { id: 7, user: 'Roberto', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGipTHm1jpG6AhTn7xKhXK7rgzPbR43yYzw&s' },
    { id: 8, user: 'Sofia', image: 'https://i.pinimg.com/736x/35/82/74/3582749512ba0397b4c8edc5387c38eb.jpg' },
    { id: 9, user: 'Luis', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yJAnpxEYZ9gIaLQPAyG56fIsnkB4vQ7ofg&s' },
    { id: 10, user: 'Eva', image: 'https://media.istockphoto.com/id/1156284726/photo/portrait-of-a-woman.jpg' }
  ];

  posts = [
    { 
      id: 1, 
      user: 'Carlos', 
      userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlF-8hJZWN0UkacWF_D4XKV_hmQl0DZJmXaQ&s', 
      content: 'https://cdn.domestika.org/c_fit,dpr_auto,f_auto,q_80,t_base_params,w_820/v1596140821/content-items/005/365/121/IMG-20200726-WA0008-01-original.jpeg?1596140821' 
    },
    { 
      id: 2, 
      user: 'Maria', 
      userAvatar: 'https://b2472105.smushcdn.com/2472105/wp-content/uploads/2023/09/Poses-Perfil-Profesional-Mujeres-ago.-10-2023-1-819x1024.jpg?lossy=1&strip=1&webp=1', 
      content: 'https://via.placeholder.com/600x400?text=Post+2' 
    },
    { 
      id: 3, 
      user: 'Juan', 
      userAvatar: 'https://labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg', 
      content: 'https://via.placeholder.com/600x400?text=Post+3' 
    }
  ];
}
