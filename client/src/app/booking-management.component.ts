import { Component, OnInit } from '@angular/core';
import { BookingService, Booking } from './booking.service';

@Component({
  selector: 'app-booking-management',
  template: `
    <h2>Bookings</h2>
    <form (ngSubmit)="create()" #bookingForm="ngForm">
      <input name="showId" [(ngModel)]="newBooking.showId" placeholder="Show ID" required type="number">
      <input name="customerName" [(ngModel)]="newBooking.customerName" placeholder="Customer" required>
      <input name="seatCount" [(ngModel)]="newBooking.seatCount" placeholder="Seats" required type="number">
      <button type="submit">Book</button>
    </form>
    <ul>
      <li *ngFor="let b of bookings">
        #{{b.id}} Show:{{b.showId}} {{b.customerName}} x{{b.seatCount}}
        <button (click)="cancel(b)">Cancel</button>
      </li>
    </ul>
  `
})
export class BookingManagementComponent implements OnInit {
  bookings: Booking[] = [];
  newBooking: Partial<Booking> = {};

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.bookingService.listBookings().subscribe(d => this.bookings = d);
  }

  create() {
    this.bookingService.addBooking({
      showId: this.newBooking.showId!,
      customerName: this.newBooking.customerName!,
      seatCount: this.newBooking.seatCount!
    }).subscribe(() => {
      this.newBooking = {};
      this.refresh();
    });
  }

  cancel(b: Booking) {
    this.bookingService.cancelBooking(b.id).subscribe(() => this.refresh());
  }
}
