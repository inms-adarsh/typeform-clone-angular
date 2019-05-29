import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-continue-button',
  templateUrl: './continue-button.component.html',
  styleUrls: ['./continue-button.component.scss']
})
export class ContinueButtonComponent implements OnInit {

  @Output()
  next = new EventEmitter<any>();

  constructor(private el: ElementRef) { 
   
  }

  ngOnInit() {
    
  }

  gotoNext() {
    this.next.emit();
  }
  
}
