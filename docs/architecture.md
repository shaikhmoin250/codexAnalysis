# Architecture Diagram

The diagram below shows how users interact with the Angular frontend, how the frontend components communicate with services, and how those services send HTTP requests to the Spring Boot backend.

```mermaid
flowchart LR
    U(User)
    subgraph Frontend
        root(AppComponent)
        movies(MovieManagementComponent)
        shows(ShowManagementComponent)
        bookings(BookingManagementComponent)
        movieSvc(MovieService)
        showSvc(ShowService)
        bookingSvc(BookingService)
        root --> movies
        root --> shows
        root --> bookings
        movies --> movieSvc
        shows --> showSvc
        bookings --> bookingSvc
    end
    subgraph Backend
        MovieController
        ShowController
        BookingController
        MovieStore[(Movie Map)]
        ShowStore[(Show Map)]
        BookingStore[(Booking Map)]
        movieSvc -- HTTP --> MovieController
        showSvc -- HTTP --> ShowController
        bookingSvc -- HTTP --> BookingController
        MovieController --> MovieStore
        ShowController --> ShowStore
        BookingController --> BookingStore
    end
    U --> root
```

Users interact with the UI components in the Angular client. Each component invokes a corresponding service, which makes HTTP calls to the Spring Boot controllers. The controllers manipulate in-memory maps that act as simple data stores.
