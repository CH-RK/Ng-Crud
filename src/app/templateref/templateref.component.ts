import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateref',
  template: `
  <div class="container">
  <h1>{{name}}</h1>
  <input #myIn type="text">
  <button (click)="logmsg(myIn.value)">Get Log</button>
  <button (click)="logmsg2(myIn)">Get Log 2</button>
  {{username}}
  </div>
  `,
  styles: []
})
export class TemplaterefComponent implements OnInit {
  public name="Template Ref Variable"
  constructor() { }

  ngOnInit() {
  }
  logmsg(value){
    console.log(value);
  }
  logmsg2(value){
    console.log(value);
  }
}
