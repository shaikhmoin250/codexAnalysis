import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Show {
  id: number;
  movieId: number;
  startTime: string;
}

@Injectable({ providedIn: 'root' })
export class ShowService {
  private base = '/shows';

  constructor(private http: HttpClient) {}

  listShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.base);
  }

  addShow(show: Omit<Show, 'id'>): Observable<Show> {
    return this.http.post<Show>(this.base, show);
  }

  updateShow(id: number, show: Omit<Show, 'id'>): Observable<Show> {
    return this.http.put<Show>(`${this.base}/${id}`, show);
  }

  deleteShow(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
