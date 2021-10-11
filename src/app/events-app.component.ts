import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
