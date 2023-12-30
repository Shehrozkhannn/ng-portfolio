import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  @ViewChild('animatedSection') animatedSection!: ElementRef;
  @HostListener('window:scroll', ['$event'])

  checkScroll() {
    const element = this.animatedSection.nativeElement;
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isInViewport) {
      element.classList.add('triggered'); // Add a CSS class to trigger the animations
    } else {
      element.classList.remove('triggered'); // Remove the class if not in the viewport
    }
  }
}
