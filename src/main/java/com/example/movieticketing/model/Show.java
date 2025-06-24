package com.example.movieticketing.model;

public class Show {
    private Long id;
    private Long movieId;
    private String startTime;

    public Show() {
    }

    public Show(Long id, Long movieId, String startTime) {
        this.id = id;
        this.movieId = movieId;
        this.startTime = startTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }
}
