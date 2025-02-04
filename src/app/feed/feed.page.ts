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
    { id: 4, user: 'Pedro', image: 'https://media.istockphoto.com/id/1364917563/es/foto/hombre-de-negocios-sonriendo-con-los-brazos-cruzados-sobre-fondo-blanco.jpg?b=1&s=612x612&w=0&k=20&c=cgi7LB_rnvAdLeT3cW6uOK27LWXHg65cBkp7rewfde0=' },
    { id: 5, user: 'Laura', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, user: 'Ana', image: '' },
    { id: 7, user: 'Roberto', image: 'https://media.istockphoto.com/id/1399565382/es/foto/joven-empresario-mestizo-feliz-de-pie-con-los-brazos-cruzados-trabajando-solo-en-una-oficina.jpg?b=1&s=612x612&w=0&k=20&c=ZVHkE4INrq7zupzkVLOG-RHa_FSSMVc-5cbRdxIXhLc=' },
    { id: 8, user: 'Sofia', image: '' },
    { id: 9, user: 'Luis', image: '' },
    { id: 10, user: 'Eva', image: '' }
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
