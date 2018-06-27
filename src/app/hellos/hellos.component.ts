import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hellos',
  template: `
    <p>
      hellos works!
    </p>
  `,
  styleUrls: ['./hellos.component.css']
})
export class HellosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
