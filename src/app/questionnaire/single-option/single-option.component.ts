import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/question.model';

@Component({
  selector: 'app-single-option',
  templateUrl: './single-option.component.html',
  styleUrls: ['./single-option.component.scss']
})
export class SingleOptionComponent implements OnInit {

  @Input()
  question: Question;
  
  @Output()
  scrollNext = new EventEmitter<any>();

  /**
   * Selected Option
   */
  selectedOption: any
  
  constructor() { }

  ngOnInit() {
  }

  /**
   * Go to next Question
   */
  gotoNext() {
    const jumps = this.question.jumps;
    let destination;

    if(jumps.length > 0 ) {
      jumps.forEach(jump => {
          if(jump.conditions[0].value === this.selectedOption) {
            destination = jump.destination.id;
          }
      });
    }
    this.scrollNext.emit({
      question: this.question,
      destination: destination || ''
    });
  }
}
