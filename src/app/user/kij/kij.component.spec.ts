import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KijComponent } from './kij.component';

describe('KijComponent', () => {
  let component: KijComponent;
  let fixture: ComponentFixture<KijComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KijComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
