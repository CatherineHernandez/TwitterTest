import { UsuarioService } from '../usuarios/usuarios.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from './grupos.model';

@Injectable()
export class GrupoService{


    constructor( private usuarioService: UsuarioService) { } 

    grupos: Grupo[] =  [
        new Grupo(
            'Primer Grupo',
            [
                this.usuarioService.getUser(0)
            ]
        ),
        new Grupo(
            'Segundo Grupo',
            [
                this.usuarioService.getUser(0),
                this.usuarioService.getUser(1)
            ]
        )
     ];

     //Para regresar la lista de todos los usuarios
     getGrupos(): Observable<Grupo[]> {
        return new Observable(observable => {
          observable.next(this.grupos);
          observable.complete();
        });
     }

     //Para regresar un usuario en particular 
     getGrupo(index: number ) {
        return this.grupos[index];
      }

      addGrupo(grupo: Grupo) {
        this.grupos.push(grupo);
      }

}
