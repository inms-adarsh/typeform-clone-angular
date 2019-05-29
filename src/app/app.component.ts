import { Component, OnInit, HostListener, Renderer, ElementRef, Inject, Input, HostBinding, Renderer2, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'typeform';

  constructor(private renderer: Renderer, private elem: ElementRef, @Inject(DOCUMENT) private document: Document) {

  }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   let elements = this.elem.nativeElement.querySelectorAll('.input-block');
  //   //we'll do some stuff here when the window is scrolled
  //   elements.forEach((elem) => {
  //     var etop = elem.getBoundingClientRect().top;
  //     var diff = etop - window.pageYOffset;

  //     // console.log(etop);
  //     // console.log(window.pageYOffset);

  //     if (this.elementInViewport(elem)) {
  //       this.reinitState(elem, elements);
  //     }
  //   });
  // }


  // reinitState(elem, elements) {
  //   elements.forEach(elem => {
  //     elem.classList.remove('active');
  //   })
  //   elem.classList.add('active');
  // }

  // elementInViewport(el) {
  //   var top = el.offsetTop;
  //   var left = el.offsetLeft;
  //   var width = el.offsetWidth;
  //   var height = el.offsetHeight;
  
  //   while(el.offsetParent) {
  //     el = el.offsetParent;
  //     top += el.offsetTop;
  //     left += el.offsetLeft;
  //   }
  
  //   return (
  //     top < (window.pageYOffset + window.innerHeight) &&
  //     left < (window.pageXOffset + window.innerWidth) &&
  //     (top + height) > window.pageYOffset &&
  //     (left + width) > window.pageXOffset
  //   );
  // }

  ngAfterViewInit(): void {
    // $(container).find(".input-block").each(function () {
    //   var etop = $(this).offset().top;
    //   var diff = etop - $(window).scrollTop();

    //   if (diff > 100 && diff < 300) {
    //     reinitState(this);
    //   }
    // });

    // function reinitState(e) {
    //   $(container).find(".input-block").removeClass("active");

    //   $(container).find(".input-block input").each(function () {
    //     $(this).blur();
    //   });
    //   $(e).addClass("active");
    //   /*$(e).find('input').focus();*/
    // }

    var elements = this.elem.nativeElement.querySelectorAll('input');

    elements.forEach(elem => {
      elem.addEventListener('change', (event) => {
        event.stopPropagation();
        elem.parentElement.parentElement.nextElementSibling.click();
      });
    });


  }
  ngOnInit(): void {
    // $(container).find(".input-block").each(function () {
    //   var etop = $(this).offset().top;
    //   var diff = etop - $(window).scrollTop();

    //   if (diff > 100 && diff < 300) {
    //     reinitState(this);
    //   }
    // });

    // function reinitState(e) {
    //   $(container).find(".input-block").removeClass("active");

    //   $(container).find(".input-block input").each(function () {
    //     $(this).blur();
    //   });
    //   $(e).addClass("active");
    //   /*$(e).find('input').focus();*/
    // }

    // var el = this.elem.nativeElement.querySelector('radio');

    // el.addEventListener('change', () => {
    //   this.elem.nativeElement.nextElementSibling().click();
    // });


  }


}


import { Directive } from '@angular/core';
@Directive({
  selector: '[onReturn]'
})
export class OnReturnDirective {
  private el: ElementRef;
  @Input() onReturn: string;
  backgroundColor: string;
  constructor(private _el: ElementRef, private rendere: Renderer) {
    this.el = this._el;
  }
  

  @HostListener('click', ['$event'])
  scrollToItem(event) {
    window.scrollTo({ left: 0, top: this.el.nativeElement.offsetTop - 200, behavior: 'smooth' });
  };
  
  @HostListener('keydown', ['$event']) onKeyDown(e) {
    if ((e.which == 13 || e.keyCode == 13)) {
      e.preventDefault();
      if (e.srcElement.nextElementSibling) {
        e.srcElement.nextElementSibling.focus();
      }
      else {
        console.log('close keyboard');
      }
      return;
    }

  }

}