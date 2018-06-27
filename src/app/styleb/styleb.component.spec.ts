import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylebComponent } from './styleb.component';

describe('StylebComponent', () => {
  let component: StylebComponent;
  let fixture: ComponentFixture<StylebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
