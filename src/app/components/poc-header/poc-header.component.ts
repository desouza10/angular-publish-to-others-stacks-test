import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc-header',
  templateUrl: './poc-header.component.html',
  styleUrls: ['./poc-header.component.scss'],
})
export class PocHeaderComponent implements OnInit {
  @Input() drawer: any;
  constructor() { }

  ngOnInit(): void {
  }

  clickPoc(): void {
    alert('Componente Angular do Header!')
  }

}
