import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openLinkedInProfile(){
    const linkedInProfileUrl  = 'https://www.linkedin.com/in/sharoze-kkhan';
    window.open(linkedInProfileUrl, '_blank');
  }

  openGitHubProfile(){
    const gitHubProfileLink = 'https://github.com/Shehrozkhannn';
    window.open(gitHubProfileLink, '_blank');
  }

}
