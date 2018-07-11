import { Component, OnInit } from '@angular/core';

import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuarios.service';
import { SessionManager } from '../../Session/session.local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  usuario: Usuario;
  usuarioService: UsuarioService = new UsuarioService();

  constructor( private route: Router ) { }

  ngOnInit() {
    this.usuario =this.usuarioService.getUser(0);
    let token = SessionManager.getToken();
    console.log(token);
    if(!token){
      this.route.navigate(['/'])
    }
  }

}
