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

  @Output() SelectedUsuario = new EventEmitter<Usuario>();

  onSelectedUsuario(usuario: Usuario){
    this.SelectedUsuario.emit(usuario);
  }

  constructor( private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe((usuariosData) => this.usuarios = usuariosData);
    console.log(this.usuarios);
    
  }

  

}
