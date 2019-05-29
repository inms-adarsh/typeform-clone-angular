import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnswerComponent } from './text-answer.component';

describe('TextAnswerComponent', () => {
  let component: TextAnswerComponent;
  let fixture: ComponentFixture<TextAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
