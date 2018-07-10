import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UsuarioService }  from './usuarios.service';

import { Usuario } from './usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuarioComponent implements OnInit, OnChanges {
  usuarios: Usuario[];
  idUsuariosPop: Usuario[] = []; 

  @Output() SelectedUsuario = new EventEmitter<Usuario>();
  @Input() inUser;

  onSelectedUsuario(usuario: Usuario){

    this.idUsuariosPop.push(usuario);
    this.SelectedUsuario.emit(usuario);
  }

  constructor( private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe((usuariosData) => this.usuarios = usuariosData);
    
  }

  ngOnChanges(changes: SimpleChanges){
    
    this.idUsuariosPop.splice(this.idUsuariosPop.indexOf(this.inUser));
    console.log( changes);
    
  }

}
