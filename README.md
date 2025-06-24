# Movie Ticketing API

This project provides a basic Spring Boot application exposing REST APIs for managing movies, showtimes and bookings.
It also includes a minimal Angular frontend that consumes the API.

## Backend

Gradle is used for building the Spring Boot application.

```bash
gradle build
```

Run the application with:

```bash
gradle bootRun
```

The service will start on `http://localhost:8080`.

## Frontend

The `client` directory contains a simple Angular application.
Install dependencies (requires internet access) and run the development server:

```bash
cd client
npm install
npm start
```

The frontend will be served on `http://localhost:4200` and proxy API requests to the backend.
