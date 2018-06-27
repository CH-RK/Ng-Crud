import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatab',
  template: `
  <div class="container">
  <h1>{{name}}</h1>
  <input type="text" [(ngModel)]="username">
  {{username}}
  </div>
  `,
  styles: []
})
export class TwowaydatabComponent implements OnInit {

  public name="Two Way Data Binding";
  public username=""
  constructor() { }

  ngOnInit() {
  }

}
