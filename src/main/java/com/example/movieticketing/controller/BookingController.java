package com.example.movieticketing.controller;

import com.example.movieticketing.model.Booking;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    private final Map<Long, Booking> bookings = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong();

    @GetMapping
    public Collection<Booking> listBookings() {
        return bookings.values();
    }

    @GetMapping("/{id}")
    public Booking getBooking(@PathVariable Long id) {
        return bookings.get(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Booking createBooking(@RequestBody Booking booking) {
        long id = idGenerator.incrementAndGet();
        booking.setId(id);
        bookings.put(id, booking);
        return booking;
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void cancelBooking(@PathVariable Long id) {
        bookings.remove(id);
    }
}
