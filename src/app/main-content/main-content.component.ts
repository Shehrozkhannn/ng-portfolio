import { Component, OnInit } from '@angular/core';
import { ModesService } from '../modes.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  isDarkMode:boolean = false;
  constructor(private mode: ModesService) { 
  }

  ngOnInit(): void {
    console.log(this.isDarkMode,'MAIN_CON')
    this.mode.darkMode$.subscribe((isDark)=>{
      console.log(isDark,'MAIN')
      this.isDarkMode = isDark
    })
  }

  toggleDarkMode() {
    this.mode.toggleDarkMode();
  }

  openLinkedInProfile(){
    const linkedInProfileUrl  = 'https://www.linkedin.com/in/sharoze-kkhan';
    window.open(linkedInProfileUrl, '_blank');
  }

  openGitHubProfile(){
    const gitHubProfileLink = 'https://github.com/Shehrozkhannn';
    window.open(gitHubProfileLink, '_blank');
  }

  downloadResume(){
    const resumePath = 'assets/SharozeResume.pdf';
    const link = document.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href', resumePath);
    link.click();
  }


}
