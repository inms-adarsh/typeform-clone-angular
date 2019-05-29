import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { Question } from 'src/app/question.model';

@Component({
  selector: 'app-text-answer',
  templateUrl: './text-answer.component.html',
  styleUrls: ['./text-answer.component.scss']
})
export class TextAnswerComponent implements OnInit {

  @Input()
  question: Question;
  
  @Output()
  scrollNext = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * On Enter key press
   * @param event 
   */
  onPressEnter(event) {
    if(event.keyCode == 13) {
      this.gotoNext();
    }
  }

  /**
   * Go to next
   */
  gotoNext() {
    this.scrollNext.emit({
      question: this.question,
      destination: ''
    });
  }
}
