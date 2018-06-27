import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  template: `
  <div class="container">
    <h1>{{name}}</h1>
    <h2 [class]="successClass">Rakesh</h2>
    <h2 class="text-special" [class]="successClass">Rakesh</h2>
    <h2 [class.text-danger]="hasEr">Rakesh</h2>
    <h2 [ngClass]="msgclasses">Rakesh</h2>
  </div>`,
  styles: [`
        .text-success{
            color:green;
          }
        .text-danger{
            color:red;
        }
        .text-special{
            font-style:italic;
        }
          `]
})
export class ClassbindingComponent implements OnInit {
  public name ="Class Binding"
  public successClass ="text-success";
  public hasEr =false;
  public isSpecial=true;
  public msgclasses = {
    "text-success":!this.hasEr,
    "text-danger":this.hasEr,
    "text-special":this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}
