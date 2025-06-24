import { Component, OnInit } from '@angular/core';
import { ShowService, Show } from './show.service';

@Component({
  selector: 'app-show-management',
  template: `
    <h2>Shows</h2>
    <form (ngSubmit)="saveShow()" #showForm="ngForm">
      <input name="movieId" [(ngModel)]="current.movieId" placeholder="Movie ID" required type="number">
      <input name="startTime" [(ngModel)]="current.startTime" placeholder="Start Time" required>
      <button type="submit">{{ current.id ? 'Update' : 'Add' }}</button>
      <button type="button" *ngIf="current.id" (click)="clear()">Cancel</button>
    </form>
    <ul>
      <li *ngFor="let s of shows">
        ID:{{s.id}} Movie:{{s.movieId}} at {{s.startTime}}
        <button (click)="edit(s)">Edit</button>
        <button (click)="delete(s)">Delete</button>
      </li>
    </ul>
  `
})
export class ShowManagementComponent implements OnInit {
  shows: Show[] = [];
  current: Partial<Show> = {};

  constructor(private showService: ShowService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.showService.listShows().subscribe(d => this.shows = d);
  }

  edit(s: Show) {
    this.current = { ...s };
  }

  clear() {
    this.current = {};
  }

  saveShow() {
    if (this.current.id) {
      this.showService.updateShow(this.current.id, {
        movieId: this.current.movieId!,
        startTime: this.current.startTime!
      }).subscribe(() => {
        this.clear();
        this.refresh();
      });
    } else {
      this.showService.addShow({
        movieId: this.current.movieId!,
        startTime: this.current.startTime!
      }).subscribe(() => {
        this.clear();
        this.refresh();
      });
    }
  }

  delete(s: Show) {
    this.showService.deleteShow(s.id).subscribe(() => this.refresh());
  }
}
