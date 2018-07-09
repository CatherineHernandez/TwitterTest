import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../grupos.service';
import { Grupo } from '../grupos.model';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent implements OnInit {

  grupos: Grupo[];

  constructor(private grupoService: GrupoService) { }

  ngOnInit() {
    this.grupoService.getGrupos().subscribe((grupoData) => this.grupos = grupoData);
  }

}
