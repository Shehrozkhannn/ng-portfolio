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
    const sections = document.querySelectorAll('div[id]'); // Target all sections with IDs
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px 0px 100px 0px', // Add more margin to the bottom
      threshold: 0.1// Trigger when 50% of the section is visible
    };

    // Create an IntersectionObserver instance to observe each section
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(entry.target.id, entry.isIntersecting);
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          this.sectionStates[sectionId] = 'visible'; // Mark section as visible to trigger animation
        } else {
          this.sectionStates[entry.target.id] = 'hidden'; // Mark section as hidden when it's out of view
        }
      });
    }, options);

    // Observe each section
    sections.forEach(section => {
      this.observer.observe(section);
    });
  }

  scrollTo(section: string){
    const element = this.elementRef.nativeElement.querySelector(`#${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
