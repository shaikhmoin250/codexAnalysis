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
}
