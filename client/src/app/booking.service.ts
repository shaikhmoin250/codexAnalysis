import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Booking {
  id: number;
  showId: number;
  customerName: string;
  seatCount: number;
}

@Injectable({ providedIn: 'root' })
export class BookingService {
  private base = '/bookings';

  constructor(private http: HttpClient) {}

  listBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.base);
  }

  addBooking(booking: Omit<Booking, 'id'>): Observable<Booking> {
    return this.http.post<Booking>(this.base, booking);
  }

  cancelBooking(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
