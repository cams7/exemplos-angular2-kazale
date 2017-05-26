import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

   @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}