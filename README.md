# Synapse - URL Shortener

Synapse is a full-stack URL shortener application that allows users to create shortened URLs, track click analytics, and manage their links through a user-friendly dashboard.

![Synapse URL Shortener](https://github.com/dnyaneshagale/url-shortener/raw/main/screenshot.png)

## 🚀 Features

- **URL Shortening**: Create short, memorable URLs for long links
- **User Authentication**: Secure registration and login functionality
- **Analytics Dashboard**: Track click events and view usage statistics
- **Responsive Design**: Works on desktop and mobile devices
- **Copy to Clipboard**: Easy sharing of shortened links
- **Real-time Analytics**: Visualize click data with interactive charts

## 🔧 Tech Stack

### Backend (Spring Boot)
- **Java 21**: Core programming language
- **Spring Boot 3.5.5**: Framework for creating standalone applications
- **Spring Security**: Authentication and authorization
- **JWT**: Token-based authentication
- **JPA/Hibernate**: ORM for database operations
- **PostgreSQL**: Database for storing URLs and user data
- **Maven**: Dependency management

### Frontend (React)
- **React 18**: JavaScript library for building user interfaces
- **Vite**: Modern frontend build tool
- **React Router**: Navigation and routing
- **TailwindCSS**: Utility-first CSS framework
- **Chart.js**: Data visualization library
- **React Query**: Data fetching and caching
- **MUI**: Material UI components
- **React Hook Form**: Form validation

## 📂 Project Structure

```
url-shortener/
├── url-shortener-sb/           # Backend (Spring Boot)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/url/shortener/
│   │   │   │       ├── controllers/    # REST API endpoints
│   │   │   │       ├── models/         # Entity classes
│   │   │   │       ├── repository/     # Data access layer
│   │   │   │       ├── service/        # Business logic
│   │   │   │       └── security/       # Authentication & security
│   │   │   └── resources/
│   │   │       └── application.properties
│   └── pom.xml                 # Maven dependencies
│
└── ├── url-shortener-react/        # React frontend
    ├── public/                 # Static assets
    ├── src/
    |	├── api
    |   ├── assets
    │   ├── components/         # React components
    |		├── dashboard
    │   ├── contextApi/         # Context for state management
    |   ├── hooks
    │   ├── utils/              # Utility functions
    │   ├── App.jsx             # Main application component
    │   ├── AppRouter.jsx       # Routing
    │   ├── PrivateRoute.jsx   
    │   ├── main.jsx            # Entry point
    ├── index.html              # HTML template
    ├── package.json            # NPM dependencies
    ├── tailwind.config.js      # Tailwind CSS configuration
    ├── vite.config.js          # Vite configuration
```

## 🌟 Key Components

### Backend

1. **Authentication System**
    - JWT-based authentication
    - User registration and login
    - Role-based authorization

2. **URL Management**
    - URL shortening algorithm
    - URL redirection service
    - Click tracking and analytics

3. **API Endpoints**
    - Authentication endpoints
    - URL management endpoints
    - Analytics data endpoints

### Frontend

1. **User Interface**
    - Responsive landing page
    - User dashboard
    - Analytics visualization

2. **State Management**
    - Context API for global state
    - React Query for server state

3. **Routing**
    - Protected routes
    - Public/private route handling

## 🔄 API Endpoints

### Authentication
- `POST /api/auth/public/login`: Authenticate user and get JWT token
- `POST /api/auth/public/register`: Register new user

### URL Operations
- `POST /api/urls/shorten`: Create shortened URL
- `GET /api/urls/myurls`: Get all URLs for current user
- `GET /api/urls/analytics/{shortUrl}`: Get analytics for specific URL
- `GET /api/urls/totalClicks`: Get total clicks for all user URLs

### Redirection
- `GET /{shortUrl}`: Redirect to original URL and track click

## 🛠️ Setup and Installation

### Prerequisites
- Java 21
- Node.js 18+
- PostgreSQL
- Maven

### Backend Setup
1. Clone the repository
   ```bash
   git clone https://github.com/dnyaneshagale/url-shortener.git
   ```

2. Navigate to the backend directory
   ```bash
   cd url-shortener/url-shortener-sb
   ```

3. Set up environment variables
   ```
   DATABASE_URL=jdbc:postgresql://localhost:5432/urlshortener
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=yourpassword
   DATABASE_DIALECT=org.hibernate.dialect.PostgreSQLDialect
   JWT_SECRET=your-jwt-secret-key
   JWT_EXPIRATION=86400000
   FRONTEND_URL=http://localhost:5173
   ```

4. Build and run the application
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory
   ```bash
   cd url-shortener/url-shortener-react
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file with the backend URL
   ```
   VITE_BACKEND_URL=http://localhost:8080
   VITE_REACT_FRONT_END_URL=http://localhost:5173
   VITE_REACT_SUBDOMAIN=http://localhost:5173
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Access the application at `http://localhost:5173`

## 🔗 Usage

1. **Register/Login**: Create an account or login with existing credentials
2. **Shorten URL**: Enter a long URL to generate a short link
3. **Dashboard**: View all your shortened URLs and their performance
4. **Analytics**: Track click count and view charts of usage patterns
5. **Share**: Copy shortened URLs to share with others

## 📊 Database Schema

The application uses the following main entities:

- **User**: Stores user authentication and profile data
- **UrlMapping**: Maps shortened URLs to original URLs
- **ClickEvent**: Tracks when and by whom a URL was accessed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

- **Dnyanesh Agale** - [GitHub Profile](https://github.com/dnyaneshagale)

---

Made with ❤️ using Spring Boot and React