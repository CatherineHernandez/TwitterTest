import { Component, OnInit, Input } from '@angular/core';
import { Grupo } from '../grupos.model';

@Component({
  selector: 'app-detail-grupo',
  templateUrl: './detail-grupo.component.html',
  styleUrls: ['./detail-grupo.component.css']
})
export class DetailGrupoComponent implements OnInit {
  @Input() grupoReceiveParent: Grupo;

  constructor() { }

  ngOnInit() {
  }

}

