import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  usuario: Usuario = new Usuario(
    0,
    'Angel',
    '@angel',
    'angel@mail.com',
    '123',
    'image'
  );

  constructor() { }

  ngOnInit() {
  }

}
