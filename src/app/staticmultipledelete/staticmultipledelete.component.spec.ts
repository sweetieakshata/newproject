import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticmultipledeleteComponent } from './staticmultipledelete.component';

describe('StaticmultipledeleteComponent', () => {
  let component: StaticmultipledeleteComponent;
  let fixture: ComponentFixture<StaticmultipledeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticmultipledeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticmultipledeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
