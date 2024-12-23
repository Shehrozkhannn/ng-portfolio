import { Component, OnInit } from '@angular/core';
import { ModesService } from '../modes.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main-portfolio-section',
  templateUrl: './main-portfolio-section.component.html',
  styleUrls: ['./main-portfolio-section.component.scss'],
    animations: [
      trigger('fadeIn', [
        state('hidden', style({ opacity: 0 })),
        state('visible', style({ opacity: 1 })),
        transition('hidden => visible', [
          animate('1s ease-in-out')
        ]),
      ])
    ]
})
export class MainPortfolioSectionComponent implements OnInit {
  private observer: IntersectionObserver | any;
  sectionStates:any = {};
  isDarkMode:boolean = false;
  constructor(private mode: ModesService) { 
    // this.isDarkMode = mode.isDarkMode;
  }

  ngOnInit(): void {
    this.setupSectionObserver();
    this.mode.darkMode$.subscribe((isDark)=>{
      this.isDarkMode = isDark
    })
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


  showBudgetLiveDemo(){
    const liveDemoUrl  = 'https://shehrozkhannn.github.io/ng-budget-app/';
    window.open(liveDemoUrl, '_blank');
  }

  goToBudgetGitHubCode(){
    const gitHubCodeUrl  = 'https://github.com/Shehrozkhannn/ng-budget-app';
    window.open(gitHubCodeUrl, '_blank');
  }

  showChatDemo(){
    const liveDemoUrl = 'https://shehrozkhannn.github.io/ng-chatlist/chatbox';
    window.open(liveDemoUrl, '_blank');
  }

  goToChatwebsiteCode(){
    const liveDemoUrl = 'https://github.com/Shehrozkhannn/ng-chatlist';
    window.open(liveDemoUrl, '_blank'); 
  }

  showUserListDemo(){
    const liveDemoUrl = 'https://shehrozkhannn.github.io/ng-todolist/';
    window.open(liveDemoUrl, '_blank');
  }

  goToUserListCode(){
    const githubCodeUrl = ' https://github.com/Shehrozkhannn/ng-todolist';
    window.open(githubCodeUrl, '_blank');
   
  }

  showJobPortalDemo(){
    const liveDemoUrl = 'https://shehrozkhannn.github.io/ng-job-portal/';
    window.open(liveDemoUrl, '_blank');
  }

  goToJobPortalCode(){
    const githubCodeUrl = 'https://github.com/Shehrozkhannn/ng-job-portal';
    window.open(githubCodeUrl, '_blank');
  }

  showCoffeeDemo(){
    const liveDemoUrl = 'https://shehrozkhannn.github.io/coffee-shop/';
    window.open(liveDemoUrl, '_blank');
  }

  goToCoffeewebsiteCode(){
    const liveDemoUrl = 'https://github.com/Shehrozkhannn/coffee-shop';
    window.open(liveDemoUrl, '_blank');    
  }

  showGymDemo(){
    const liveDemoUrl = 'https://shehrozkhannn.github.io/Star-gym/';
    window.open(liveDemoUrl, '_blank');
  }

  gotoGymTemplateCode(){
    const liveDemoUrl = 'https://github.com/Shehrozkhannn/Star-gym';
    window.open(liveDemoUrl, '_blank');  
  }

  showChurchDemo(){
    const liveDemoUrl = 'https://shehrozkhannn.github.io/church-template/';
    window.open(liveDemoUrl, '_blank');
  }

  showChurchCode(){
    const liveDemoUrl = 'https://github.com/Shehrozkhannn/church-template';
    window.open(liveDemoUrl, '_blank'); 
  }

  goToDigitalTrendDemo(){
    const liveDemoUrl = 'https://shehrozkhannn.github.io/digital-trend/';
    window.open(liveDemoUrl, '_blank');
  }

  showDigitalTrendCode(){
    const liveDemoUrl = 'https://github.com/Shehrozkhannn/digital-trend';
    window.open(liveDemoUrl, '_blank'); 
  }

  goToHostCloudDemo(){
    const liveDemoUrl = 'https://shehrozkhannn.github.io/host-cloud/';
    window.open(liveDemoUrl, '_blank');
  }

  showHostCloudCode(){
    const liveDemoUrl = 'https://github.com/Shehrozkhannn/host-cloud';
    window.open(liveDemoUrl, '_blank'); 
  }

  showSimplifyVmsDemo(){
    const liveDemoUrl = 'https://www.simplifyvms.com';
    window.open(liveDemoUrl, '_blank'); 
  }

  showEzraDemo(){
    const liveDemoUrl = 'https://www.papajohns.com.pk';
    window.open(liveDemoUrl, '_blank'); 
  }

  goToRentACarCode(){
    const liveCodeUrl = 'https://github.com/Shehrozkhannn/Rent-car';
    window.open(liveCodeUrl, '_blank');    
  }

  showRentACarDemo(){
    const liveDemoUrl = 'https://shehrozkhannn.github.io/Rent-car/';
    window.open(liveDemoUrl, '_blank');  
  }

  showExzoCode(){
    const liveDemoUrl = 'https://github.com/Shehrozkhannn/EXZO-test';
    window.open(liveDemoUrl, '_blank');  
  }

  showExzoDemo(){
    const liveDemoUrl = 'https://shehrozkhannn.github.io/EXZO-test/';
    window.open(liveDemoUrl, '_blank');  
  }

  redirectToWapp(){
    const phoneNumber = '+923232627920';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;    
    window.open(whatsappUrl, '_blank');
  }


  sendEmail(email:string) {
    const subject = 'Hello from Sharoze.dev';
    const body = 'I would like to get in touch with you.';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }


}
