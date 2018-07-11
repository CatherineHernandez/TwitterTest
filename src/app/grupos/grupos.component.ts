import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweets/tweets.service';
import { Usuario } from '../usuarios/usuario.model';
import { UsuarioService } from '../usuarios/usuarios.service';
import { Grupo } from './grupos.model';
import { GrupoService } from './grupos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
 
  grupo = new Grupo("", []);
  receiveGrupo: Grupo;

  constructor(  ) { }

  ngOnInit() {
    
  }

  ReceiveUsuario($event) {
    
    this.grupo.Usuarios.push($event);
  }

  ReceiveGrupo($event) {
    this.receiveGrupo = $event;
  
  }
  
}
