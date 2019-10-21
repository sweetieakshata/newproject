import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxtableComponent } from './checkboxtable.component';

describe('CheckboxtableComponent', () => {
  let component: CheckboxtableComponent;
  let fixture: ComponentFixture<CheckboxtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
