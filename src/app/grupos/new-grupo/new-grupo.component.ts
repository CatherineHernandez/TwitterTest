import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GrupoService } from '../grupos.service';
import { Grupo } from '../grupos.model';
import { Usuario } from '../../usuarios/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-grupo',
  templateUrl: './new-grupo.component.html',
  styleUrls: ['./new-grupo.component.css']
})
export class NewGrupoComponent implements OnInit {

  grupo = new Grupo("", []);

  public deleteUser: Usuario;
  @Output() EmitterUser = new EventEmitter<Usuario>();

  constructor( 
    private grupoService: GrupoService,
  ) { }

  ngOnInit() {
    
  }

  addGrupo(){
    this.grupoService.addGrupo(this.grupo);
    this.ResetData();
  }

  ResetData() { 
    this.grupo = new Grupo("", []);
  }

  ReceiveUsuario( usuario: Usuario) { 
      this.grupo.Usuarios.push(usuario);
    
  }

  onRemoveUsuario(usuario: Usuario) {
    this.deleteUser = usuario;
    this.grupo.Usuarios.splice(this.grupo.Usuarios.indexOf(usuario));
    //resetear el usuario por eliminar para poder detectar cambios
    this.deleteUser = new Usuario(0, "","","","","");
  }
}
