import { Usuario } from './usuario.model';

export class UsuarioService{
    usuario: Usuario = new Usuario(
        0,
        'Angel',
        '@angel',
        'angel@mail.com',
        '123',
        'https://avatars3.githubusercontent.com/u/23128076?s=400&v=4'
      );

      getUser() {
        return this.usuario;
      } 


}