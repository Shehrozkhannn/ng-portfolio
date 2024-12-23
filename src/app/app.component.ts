import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('bounceIn', [
      state('hidden', style({ transform: 'scale(0.5)', opacity: 0 })),
      state('visible', style({ transform: 'scale(1)', opacity: 1 })),
      transition('hidden => visible', [
        animate('0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)')
      ]),
      transition('visible => hidden', [
        animate('0.6s ease-in', style({ transform: 'scale(0.5)', opacity: 0 }))
      ]),
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  private observer: IntersectionObserver | any;
  sectionStates:any = {};

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.setupSectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupSectionObserver() {
    const sections = document.querySelectorAll('div[id]');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
  
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(entry.target.id, entry.isIntersecting);
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          this.sectionStates[sectionId] = 'visible';
        } else {
          this.sectionStates[entry.target.id] = 'hidden';
        }
      });
    }, options);
  
    sections.forEach(section => {
      this.observer.observe(section);
    });
  }
  

  scrollTo(section: string) {
    const element = this.elementRef.nativeElement.querySelector(`#${section}`);
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (element) {
      setTimeout(() => {
        const navbarHeight = document.querySelector('.sticky-navbar')?.clientHeight || 0;
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }, 50); // delay by 50ms to ensure smooth rendering
    }
  }
  
  
}
