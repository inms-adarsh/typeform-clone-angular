import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueButtonComponent } from './continue-button.component';

describe('ContinueButtonComponent', () => {
  let component: ContinueButtonComponent;
  let fixture: ComponentFixture<ContinueButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinueButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
