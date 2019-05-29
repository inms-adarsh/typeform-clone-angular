import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';
import { Question } from 'src/app/question.model';

@Component({
  selector: 'app-multi-option',
  templateUrl: './multi-option.component.html',
  styleUrls: ['./multi-option.component.scss']
})
export class MultiOptionComponent implements OnInit {

  @Input()
  question: Question;

  @Output()
  scrollNext = new EventEmitter<any>();

  /**
   * Selected Options
   */
  selectedOptions: Question[] = [];
  
  constructor() { }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
      if (event.keyCode === 13) {
        this.gotoNext();
      }
  }

  ngOnInit() {
   
  }

  /**
   * Add to list os selected option
   * @param option 
   */
  addToSelectedOptions(option) {
    if(this.selectedOptions.indexOf(option) == -1) {
      this.selectedOptions.push(option);
    }
  }

  /**
   * Remove Selected Option
   * @param option 
   */
  removeOption(option) {
    this.selectedOptions = this.selectedOptions.filter(item => {
      return option !== item;
    });
  }
  

  /**
   * Go to next question
   */
  gotoNext() {
    this.scrollNext.emit({
      question: this.question,
      destination: ''
    });
  }
}
