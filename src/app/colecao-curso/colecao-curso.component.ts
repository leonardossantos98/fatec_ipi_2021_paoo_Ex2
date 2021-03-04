import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colecao-curso',
  templateUrl: './colecao-curso.component.html',
  styleUrls: ['./colecao-curso.component.css']
})
export class ColecaoCursoComponent{
  curso : string[] = ["Eletrônica", "Mecânica", "Contabilidade", "Culinária"];
  cargaHoraria : string[] = ["8 semanais", "8 semanais", "4 semanais", "3 semanais"];
}
