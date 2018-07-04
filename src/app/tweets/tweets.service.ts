import { Tweet } from './tweet.module';
import { UsuarioService } from '../usuarios/usuarios.service';

export class TweetService {
  tweets: Tweet[] = [

    new Tweet(
      'Tweet de prueba',
      'Hoy',
      '@iusuario',
      ['image']
    ),

    new Tweet(
      'Segundo Tweet de Prueba',
      'Hoy',
      '@Usuario',
      ['image', 'otherImage']
    )

  ];

  getTweets() {
    return this.tweets;
  }

  getTweet(index: number) {
    return this.tweets[index];
  }
}
