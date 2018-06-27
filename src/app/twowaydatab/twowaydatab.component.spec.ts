import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaydatabComponent } from './twowaydatab.component';

describe('TwowaydatabComponent', () => {
  let component: TwowaydatabComponent;
  let fixture: ComponentFixture<TwowaydatabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaydatabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaydatabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
