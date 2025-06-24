import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id: number;
  title: string;
  genre: string;
}

@Injectable({ providedIn: 'root' })
export class MovieService {
  private base = '/movies';

  constructor(private http: HttpClient) {}

  listMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.base);
  }

  addMovie(movie: Omit<Movie, 'id'>): Observable<Movie> {
    return this.http.post<Movie>(this.base, movie);
  }

  updateMovie(id: number, movie: Omit<Movie, 'id'>): Observable<Movie> {
    return this.http.put<Movie>(`${this.base}/${id}`, movie);
  }

  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
