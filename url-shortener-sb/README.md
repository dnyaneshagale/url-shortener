# URL Shortener - Spring Boot Backend

A powerful URL shortening service backend built with Spring Boot that allows users to create shortened URLs, track click analytics, and manage their URLs through a secure API.

## Features

- **User Authentication**: Secure JWT-based authentication system
- **URL Shortening**: Convert long URLs into short, easy-to-share links
- **Click Analytics**: Track URL usage with detailed analytics including:
    - Click counts by date range
    - Total clicks per user
    - Individual click events
- **Secure API**: Role-based access control for endpoints
- **Customizable**: Configurable through environment variables

## Tech Stack

- **Java 21**
- **Spring Boot 3.5.5**
- **Spring Security** with JWT authentication
- **Spring Data JPA**
- **PostgreSQL** database
- **Lombok** for reducing boilerplate code
- **Maven** for dependency management

## Project Structure

```
src/main/java/com/url/shortener/
├── controllers/           # REST API controllers
│   ├── AuthController.java
│   ├── RedirectController.java
│   └── UrlMappingController.java
├── dtos/                  # Data Transfer Objects
├── models/                # Entity classes
│   ├── ClickEvent.java
│   ├── UrlMapping.java
│   └── User.java
├── repository/            # JPA repositories
├── security/              # Security configuration and JWT utilities
└── service/               # Business logic services
```

## API Endpoints

### Authentication

- `POST /api/auth/public/register` - Register a new user
- `POST /api/auth/public/login` - Authenticate and get JWT token

### URL Management

- `POST /api/urls/shorten` - Create a shortened URL
- `GET /api/urls/myurls` - Get all URLs created by the authenticated user
- `GET /api/urls/analytics/{shortUrl}` - Get analytics for a specific short URL
- `GET /api/urls/totalClicks` - Get total clicks aggregated by date

### URL Redirection

- `GET /{shortUrl}` - Redirect to the original URL

## Setup and Installation

### Prerequisites

- Java 21 or higher
- Maven
- PostgreSQL database

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. Configure environment variables (see below)

3. Build the application:
   ```bash
   mvn clean install
   ```

4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```properties
# Database Configuration
DATABASE_URL=jdbc:postgresql://localhost:5432/urlshortener
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=your_password
DATABASE_DIALECT=org.hibernate.dialect.PostgreSQLDialect

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=86400000  # 24 hours in milliseconds

# Frontend URL for CORS
FRONTEND_URL=http://localhost:3000
```

## Running the Application

After setting up the environment variables and building the project, you can run the application using:

```bash
java -jar target/url-shortener-sb-0.0.1-SNAPSHOT.jar
```

Or with Maven:

```bash
mvn spring-boot:run
```

The application will start on port 8080 by default.

## Security

- All API endpoints (except authentication and URL redirection) require authentication
- JWT tokens are used for stateless authentication
- Passwords are encoded using BCrypt

## Database Schema

The application uses the following main entities:

- **User**: Stores user information for authentication
- **UrlMapping**: Maps shortened URLs to their original URLs
- **ClickEvent**: Tracks each click on a shortened URL for analytics

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request