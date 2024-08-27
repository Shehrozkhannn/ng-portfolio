import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ModesService } from '../modes.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  @ViewChild('animatedSection') animatedSection!: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScroll();
  }

  isDarkMode:boolean = false;
  constructor(private mode: ModesService) { 
    // this.isDarkMode = mode.isDarkMode;
  }

  ngOnInit(): void {
    console.log(this.isDarkMode,'PORTFOLIO')
    this.mode.darkMode$.subscribe((isDark)=>{
      this.isDarkMode = isDark
    })
  }

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
