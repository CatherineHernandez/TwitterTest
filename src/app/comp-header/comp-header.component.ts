import { Component, OnInit } from '@angular/core';
import { UsuarioDetailComponent } from '../usuarios/usuario-detail/usuario-detail.component';
import { Usuario } from '../usuarios/usuario.model';

@Component({
  selector: 'app-comp-header',
  templateUrl: './comp-header.component.html',
  styleUrls: ['./comp-header.component.css']
})
export class CompHeaderComponent implements OnInit {
  usuario:Usuario;
  usuarioDetailComponent: UsuarioDetailComponent;


  constructor() { }

  ngOnInit() {

    this.usuario = this.usuarioDetailComponent.getUser();
  }

}
