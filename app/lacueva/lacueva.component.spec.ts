import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LacuevaComponent } from './lacueva.component';

describe('LacuevaComponent', () => {
  let component: LacuevaComponent;
  let fixture: ComponentFixture<LacuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LacuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
