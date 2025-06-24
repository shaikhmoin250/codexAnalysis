# User Stories

## Epic: API Development

### Story 1: Initialize Spring Boot project
**Description**
Set up a Gradle-based Spring Boot application that exposes REST services.

**Acceptance Criteria**
- `build.gradle` configures Spring Boot plugins and dependencies
- The project builds successfully with `gradle build`

**Story Points**: 2

### Story 2: Movie management endpoints
**Description**
Provide CRUD operations for movies stored in memory.

**Acceptance Criteria**
- Endpoints exist at `/movies` for listing, creating, updating and deleting movies
- Responses return the created or updated movie data

**Story Points**: 3

### Story 3: Show management endpoints
**Description**
Expose REST endpoints to manage show times.

**Acceptance Criteria**
- Endpoints exist at `/shows` supporting listing, creating, updating and deleting shows
- Each show references a movie ID and start time

**Story Points**: 3

### Story 4: Booking endpoints
**Description**
Allow customers to book and cancel movie tickets.

**Acceptance Criteria**
- Endpoints at `/bookings` allow creating a booking and viewing bookings
- DELETE endpoint cancels a booking

**Story Points**: 3

## Epic: Angular Frontend

### Story 5: Angular project scaffolding
**Description**
Create an Angular application that communicates with the backend API.

**Acceptance Criteria**
- Angular CLI configuration files are present
- `npm start` runs the dev server on port 4200 and proxies API requests

**Story Points**: 2

### Story 6: Movie management UI
**Description**
Implement a component to manage movies from the browser.

**Acceptance Criteria**
- The UI lists existing movies and allows adding, editing and deleting
- Forms validate required fields before submission

**Story Points**: 5

### Story 7: Show management UI
**Description**
Provide a user interface for creating and managing shows.

**Acceptance Criteria**
- Users can view, add, edit and remove shows
- Each show entry displays movie ID and start time

**Story Points**: 5

### Story 8: Booking management UI
**Description**
Enable booking creation and cancellation from the frontend.

**Acceptance Criteria**
- A form collects show ID, customer name and seat count
- Users can cancel an existing booking from the list

**Story Points**: 5

### Story 9: API service layer
**Description**
Create Angular services for movies, shows and bookings.

**Acceptance Criteria**
- Each service wraps HTTP calls to the corresponding backend endpoints
- Components use these services for data operations

**Story Points**: 3

### Story 10: Root application layout
**Description**
Display management sections in the root component.

**Acceptance Criteria**
- The root component renders movie, show and booking management components
- Application builds and runs without errors

**Story Points**: 1
