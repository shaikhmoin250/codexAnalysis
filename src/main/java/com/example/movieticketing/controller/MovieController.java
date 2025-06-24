package com.example.movieticketing.controller;

import com.example.movieticketing.model.Movie;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/movies")
public class MovieController {

    private final Map<Long, Movie> movies = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong();

    @GetMapping
    public Collection<Movie> listMovies() {
        return movies.values();
    }

    @GetMapping("/{id}")
    public Movie getMovie(@PathVariable Long id) {
        return movies.get(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Movie addMovie(@RequestBody Movie movie) {
        long id = idGenerator.incrementAndGet();
        movie.setId(id);
        movies.put(id, movie);
        return movie;
    }

    @PutMapping("/{id}")
    public Movie updateMovie(@PathVariable Long id, @RequestBody Movie movie) {
        movie.setId(id);
        movies.put(id, movie);
        return movie;
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMovie(@PathVariable Long id) {
        movies.remove(id);
    }
}
