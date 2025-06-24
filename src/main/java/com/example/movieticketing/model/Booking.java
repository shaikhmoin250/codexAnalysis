package com.example.movieticketing.model;

public class Booking {
    private Long id;
    private Long showId;
    private String customerName;
    private int seatCount;

    public Booking() {
    }

    public Booking(Long id, Long showId, String customerName, int seatCount) {
        this.id = id;
        this.showId = showId;
        this.customerName = customerName;
        this.seatCount = seatCount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getShowId() {
        return showId;
    }

    public void setShowId(Long showId) {
        this.showId = showId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public int getSeatCount() {
        return seatCount;
    }

    public void setSeatCount(int seatCount) {
        this.seatCount = seatCount;
    }
}
