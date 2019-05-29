import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOptionComponent } from './single-option.component';

describe('SingleOptionComponent', () => {
  let component: SingleOptionComponent;
  let fixture: ComponentFixture<SingleOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
