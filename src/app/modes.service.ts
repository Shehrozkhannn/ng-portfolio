import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModesService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();
  constructor() { }

  toggleDarkMode() {
    this.darkModeSubject.next(!this.darkModeSubject.value);
  }
}
