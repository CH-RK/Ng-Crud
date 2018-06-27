import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleb',
  template: `
    <div class="container">
      <h1>{{name}}</h1>
      <h2 [style.color]="'blue'">Rakesh</h2>
      <h2 [style.color]="highlightcolor">Rakesh</h2>
      <h2 [style.color]="hasEr ? 'red' : 'green'">Rakesh</h2>
      <h2 [ngStyle]="titles">Rakesh</h2>
    </div>
  `,
  styles: [``]
})
export class StylebComponent implements OnInit {
  
  public name="Style Binding";
  public highlightcolor="orange";
  public hasEr = false;
  public isspecial = true;
  public titles = {
      color:"purple",
      fontStyle:"italic"
  }
  constructor() { }

  ngOnInit() {
  }

}
