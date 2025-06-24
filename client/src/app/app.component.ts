import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Movie Ticketing</h1>
    <app-movie-management></app-movie-management>
    <app-show-management></app-show-management>
    <app-booking-management></app-booking-management>
  `
})
export class AppComponent { }
