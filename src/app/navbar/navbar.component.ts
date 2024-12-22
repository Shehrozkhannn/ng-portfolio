import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() sectionSelected = new EventEmitter<string>();
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }


  navigateTo(section: string): void {
    this.sectionSelected.emit(section);
  }

  loadApplication(){
    window.location.reload();
  }

}
