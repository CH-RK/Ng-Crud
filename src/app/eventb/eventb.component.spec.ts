import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbComponent } from './eventb.component';

describe('EventbComponent', () => {
  let component: EventbComponent;
  let fixture: ComponentFixture<EventbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
