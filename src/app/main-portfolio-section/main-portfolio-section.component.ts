import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-portfolio-section',
  templateUrl: './main-portfolio-section.component.html',
  styleUrls: ['./main-portfolio-section.component.scss']
})
export class MainPortfolioSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showBudgetLiveDemo(){
    const liveDemoUrl  = 'https://shehrozkhannn.github.io/ng-budget-app/';
    window.open(liveDemoUrl, '_blank');
  }

  goToBudgetGitHubCode(){
    const gitHubCodeUrl  = 'https://github.com/Shehrozkhannn/ng-budget-app';
    window.open(gitHubCodeUrl, '_blank');
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


}
