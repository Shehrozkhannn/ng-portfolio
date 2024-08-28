import { Component, OnInit } from '@angular/core';
import { ModesService } from '../modes.service';

@Component({
  selector: 'app-main-portfolio-section',
  templateUrl: './main-portfolio-section.component.html',
  styleUrls: ['./main-portfolio-section.component.scss']
})
export class MainPortfolioSectionComponent implements OnInit {
  isDarkMode:boolean = false;
  constructor(private mode: ModesService) { 
    // this.isDarkMode = mode.isDarkMode;
  }

  ngOnInit(): void {
    console.log(this.isDarkMode,'PORTFOLIO')
    this.mode.darkMode$.subscribe((isDark)=>{
      console.log(isDark,'PORT')
      this.isDarkMode = isDark
    })
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


}
