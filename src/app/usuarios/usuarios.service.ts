import { Usuario } from './usuario.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService{
    usuarios: Usuario[] =  [
      new Usuario (
        0,
        'Angel',
        '@angel',
        'angel@mail.com',
        '123',
        'https://avatars3.githubusercontent.com/u/23128076?s=400&v=4'
      ),

      new Usuario (
        1,
        'Cathy',
        '@caty',
        'caty@mail.com',
        '123',
        'https://i2.wp.com/amyshojai.com/wp-content/uploads/2015/03/KittenFace_2186038_original.jpg?fit=3716%2C2477&ssl=1'
      )
     ];

     //Para regresar la lista de todos los usuarios
     getUsers(): Observable<Usuario[]> {
        return new Observable(observable => {
          observable.next(this.usuarios);
          observable.complete();
        });
     }

     //Para regresar un usuario en particular 
     getUser(index: number ) {
        return this.usuarios[index];
      }

}
