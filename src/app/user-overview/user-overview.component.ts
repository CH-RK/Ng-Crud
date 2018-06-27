import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-overview',
  template: `
  <div class="container">
    <h1>{{name}}</h1>
        <input type="text" value="Rakesh">
        <input [id]="myId" type="text" value="Rakesh">
        <input id="{{myId}}" type="text" value="Rakesh">
        <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Rakesh">


  </div>
  `,
  styles: []
})
export class UserOverviewComponent implements OnInit {

  public name ="Property Binding";
  public myId ="testId";
  public isDisabled =false;
  constructor() { }

  ngOnInit() {
  }

}
 