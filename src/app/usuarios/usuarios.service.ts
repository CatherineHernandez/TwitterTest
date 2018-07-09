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
        'Caty',
        '@caty',
        'caty@mail.com',
        '123',
        'ImagePath'
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
