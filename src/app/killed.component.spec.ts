import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KilledComponent } from './killed.component';

describe('KilledComponent', () => {
  let component: KilledComponent;
  let fixture: ComponentFixture<KilledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KilledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
