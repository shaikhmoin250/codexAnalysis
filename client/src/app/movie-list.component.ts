import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from './movie.service';

@Component({
  selector: 'app-movie-list',
  template: `
    <ul>
      <li *ngFor="let movie of movies">{{movie.title}} ({{movie.genre}})</li>
    </ul>
  `
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.listMovies().subscribe(data => this.movies = data);
  }
}
