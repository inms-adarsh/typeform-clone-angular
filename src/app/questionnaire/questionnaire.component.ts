import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';
import { Observable } from 'rxjs';
import { Question } from '../question.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questions$: Observable<Question>;

  /**
   * Question Service
   * @param {QuestionnaireService} questionnaireService 
   * @param {Element} el 
   */
  constructor(private questionnaireService: QuestionnaireService, private el: ElementRef) {     
    this.questions$ = this.questionnaireService.getQuestions();
  }

  /**
   * On Init function
   */
  ngOnInit() {    
    this.el.nativeElement.addEventListener('scroll', ($event) => {
      this.onWindowScroll();
    })
  }

  /**
   * On Window Scroll Event, element in view port should be focused
   */
  onWindowScroll() {
    let questions = this.el.nativeElement.querySelectorAll('.page_wrapper');
    //we'll do some stuff here when the window is scrolled
    questions.forEach((question) => {
      var etop = question.getBoundingClientRect().top;
      var diff = etop - window.pageYOffset;
      if (diff<300) {
        this.reinitState(question, questions);
      }
    });
  }

  /**
   * Re-initiate focus on scroll
   * @param question 
   * @param elements 
   */
  reinitState(question, questions) {
    questions.forEach(elem => {
      elem.classList.remove('focus');
    })
    question.classList.add('focus');
  }

  /**
   * Go to next question
   * @param event 
   */
  gotoNext(event) {  

    let node = event.destination ? document.getElementById(event.destination) : document.getElementById(event.question.identifier);

    this.el.nativeElement.scrollTo({
      left: 0, 
      top: event.destination ? node.offsetTop : node.offsetTop + 500  
    });

    if(event.destination) {
      node.querySelector('input').focus();
    } else {
      node.nextElementSibling.querySelector('input').focus();
    }
  }
}
