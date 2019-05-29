import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiOptionComponent } from './multi-option.component';

describe('MultiOptionComponent', () => {
  let component: MultiOptionComponent;
  let fixture: ComponentFixture<MultiOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
