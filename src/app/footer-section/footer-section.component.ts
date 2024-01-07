import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openGithub(){
    const gitHubProfileLink = 'https://github.com/Shehrozkhannn';
    window.open(gitHubProfileLink, '_blank');
  }

  openLinkdin(){
    const linkedInProfileUrl  = 'https://www.linkedin.com/in/sharoze-kkhan';
    window.open(linkedInProfileUrl, '_blank');
  }


}
