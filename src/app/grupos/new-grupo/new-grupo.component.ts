import { Component, OnInit } from '@angular/core';
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

}
