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

## Frontend requirements

The Angular client exposes all operations offered by the REST API:

- **Movies** – create, update, list and delete movies.
- **Shows** – create, update, list and delete shows.
- **Bookings** – create and cancel bookings and view all bookings.

Each section of the UI presents a small form for creating or updating entities and lists existing items with controls to modify or remove them.

### Development plan

1. Build the Spring Boot backend using Gradle and run it on port 8080.
2. In a separate terminal, install Angular dependencies inside `client/` and start the development server with `npm start`.
3. The Angular app is served on `http://localhost:4200` and proxies API calls to the backend.
4. Use the movie, show and booking management sections to interact with the backend.

