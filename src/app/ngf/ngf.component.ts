import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngf',
  template: `
    <div class="container">
      <h1>{{name}}</h1>
      <div *ngFor="let color of colors">
      <h3>{{color}}</h3>
      </div>
      <h3>Index Of Elements</h3>
      <div *ngFor="let color of colors index as i">
      <h3>{{i}} {{color}}</h3>
      </div>
      <div *ngFor="let color of colors first as i">
      <h3>{{i}} {{color}}</h3>
      </div>
      <div *ngFor="let color of colors last as i">
      <h3>{{i}} {{color}}</h3>
      </div>
      <div *ngFor="let color of colors odd as i">
      <h3>{{i}} {{color}}</h3>
      </div>
      <div *ngFor="let color of colors even as i">
      <h3>{{i}} {{color}}</h3>
      </div>
    </div>
  `,
  styles: []
})
export class NgfComponent implements OnInit {

  public name="ngfor Example"
  public colors = ["red","blue","green","orange","yellow"]
  constructor() { }

  ngOnInit() {
  }

}
