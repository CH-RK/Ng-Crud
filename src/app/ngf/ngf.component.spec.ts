import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfComponent } from './ngf.component';

describe('NgfComponent', () => {
  let component: NgfComponent;
  let fixture: ComponentFixture<NgfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
