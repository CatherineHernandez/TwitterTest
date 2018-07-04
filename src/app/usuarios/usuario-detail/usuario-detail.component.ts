import { Component, OnInit } from '@angular/core';

import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  usuario: Usuario;
  usuarioService: UsuarioService = new UsuarioService();

  constructor(  ) { }

  ngOnInit() {
    this.usuario =this.usuarioService.getUser();
  }

  

}
