import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieManagementComponent } from './movie-management.component';
import { ShowManagementComponent } from './show-management.component';
import { BookingManagementComponent } from './booking-management.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieManagementComponent,
    ShowManagementComponent,
    BookingManagementComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
