import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayedColumns = ['codigo','descripcion','tipo','accion'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}

export interface Element {
  id:number;
  codigo: string;
  descripcion: string;
  tipo: string;
  seleccionado: false;
}

const ELEMENT_DATA: Element[] = [
  {id: 1, codigo: 'CDOC001460', descripcion: 'Garantia', tipo: 'PDF', seleccionado:true},
  {id: 2, codigo: 'CDOC001461', descripcion: 'Garantia', tipo: 'PDF', seleccionado:false},
  {id: 3, codigo: 'CDOC001462', descripcion: 'Garantia', tipo: 'PDF', seleccionado:true}
];
