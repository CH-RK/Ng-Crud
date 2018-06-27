import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventb',
  template: `
    <div class="container">
    <h1>{{name}}</h1>
    <button (click)="onClick()" class="btn btn-success">Event-Msg</button>
    {{greeting}}<br>
    <button (click)="onClick2($event)" class="btn btn-success">Event-Msg 2</button><br>
    <button (click)="greeting='Hello Inline Greeting'" class="btn btn-success">Event-Msg 3</button>
    </div>
  `,
  styles: []
})
export class EventbComponent implements OnInit {

  public name = "Event Binding"
  public greeting = "";
  constructor() { }

  ngOnInit() {
  }

  onClick(){
      console.log("This is btn click information");
      this.greeting="Wel come to gretting Section";
  }
  onClick2(event){
      console.log(event);
      //this.greeting ="chinna";
      this.greeting =event.screenX;
  }
}
