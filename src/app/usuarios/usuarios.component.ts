import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService }  from './usuarios.service';

import { Usuario } from './usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[];
  idUsuariosPop: Usuario[] = []; 

  @Output() SelectedUsuario = new EventEmitter<Usuario>();

  onSelectedUsuario(usuario: Usuario){

    this.idUsuariosPop.push(usuario);
    this.SelectedUsuario.emit(usuario);
  }

  constructor( private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe((usuariosData) => this.usuarios = usuariosData);
    
  }

}
