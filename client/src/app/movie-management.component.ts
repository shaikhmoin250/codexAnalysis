import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from './movie.service';

@Component({
  selector: 'app-movie-management',
  template: `
    <h2>Movies</h2>
    <form (ngSubmit)="saveMovie()" #movieForm="ngForm">
      <input name="title" [(ngModel)]="current.title" placeholder="Title" required>
      <input name="genre" [(ngModel)]="current.genre" placeholder="Genre" required>
      <button type="submit">{{ current.id ? 'Update' : 'Add' }}</button>
      <button type="button" *ngIf="current.id" (click)="clear()">Cancel</button>
    </form>
    <ul>
      <li *ngFor="let m of movies">
        {{m.title}} ({{m.genre}})
        <button (click)="edit(m)">Edit</button>
        <button (click)="delete(m)">Delete</button>
      </li>
    </ul>
  `
})
export class MovieManagementComponent implements OnInit {
  movies: Movie[] = [];
  current: Partial<Movie> = {};

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.movieService.listMovies().subscribe(d => this.movies = d);
  }

  edit(m: Movie) {
    this.current = { ...m };
  }

  clear() {
    this.current = {};
  }

  saveMovie() {
    if (this.current.id) {
      this.movieService.updateMovie(this.current.id, {
        title: this.current.title!,
        genre: this.current.genre!
      }).subscribe(() => {
        this.clear();
        this.refresh();
      });
    } else {
      this.movieService.addMovie({
        title: this.current.title!,
        genre: this.current.genre!
      }).subscribe(() => {
        this.clear();
        this.refresh();
      });
    }
  }

  delete(m: Movie) {
    this.movieService.deleteMovie(m.id).subscribe(() => this.refresh());
  }
}
