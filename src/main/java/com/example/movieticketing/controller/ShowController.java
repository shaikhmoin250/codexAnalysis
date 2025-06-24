package com.example.movieticketing.controller;

import com.example.movieticketing.model.Show;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/shows")
public class ShowController {

    private final Map<Long, Show> shows = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong();

    @GetMapping
    public Collection<Show> listShows() {
        return shows.values();
    }

    @GetMapping("/{id}")
    public Show getShow(@PathVariable Long id) {
        return shows.get(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Show addShow(@RequestBody Show show) {
        long id = idGenerator.incrementAndGet();
        show.setId(id);
        shows.put(id, show);
        return show;
    }

    @PutMapping("/{id}")
    public Show updateShow(@PathVariable Long id, @RequestBody Show show) {
        show.setId(id);
        shows.put(id, show);
        return show;
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteShow(@PathVariable Long id) {
        shows.remove(id);
    }
}
