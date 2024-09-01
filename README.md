# FullStack Medical Project Monorepo

This monorepo repository contains both the frontend and backend codebases for a full-stack medical project. The frontend is built using React with React Bootstrap for UI components, and the backend is a RESTful API built with Ruby on Rails. The application allows users to register and submit their medical information, which is then stored in a PostgreSQL database.

## Table of Contents

- [FullStack Medical Project Monorepo](#fullstack-medical-project-monorepo)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Frontend (React)](#frontend-react)
    - [Description](#description)
    - [Installation and Setup](#installation-and-setup)
    - [Key Features](#key-features)
  - [Backend (Rails API)](#backend-rails-api)
    - [Description](#description-1)
    - [Key Features](#key-features-1)
    - [Environment Variables](#environment-variables)
    - [Deployment](#deployment)

## Project Structure

```
fullstack_medical_project/
│
├── backend/ # Rails API backend
│ ├── app/
│ ├── config/
│ ├── db/
│ ├── Gemfile
│ ├── Gemfile.lock
│ └── ...
│
├── frontend/ # React frontend
│ ├── public/
│ ├── src/
│ ├── package.json
│ ├── package-lock.json
│ └── ...
│
└── README.md # Project README file
```

## Frontend (React)

### Description

- The frontend of this project is built using React and is designed to provide a user-friendly interface for users to input their medical information. The form includes fields such as name, profession, specialty, email, and city. The application uses React Bootstrap for styling and UI components.

### Installation and Setup

- Navigate to the frontend directory:
  ```bash
  cd frontend
  ```
- Install the required dependencies:
  ```bash
    npm install
  ```
- Start the development server:
  ```bash
      npm start
  ```
- The frontend application will be available at
  ```bash
  http://localhost:3001
  ```

### Key Features

- User Registration Form: A form to collect user information such as name, profession, specialty, email, and city.
  React Bootstrap Integration: Utilizes React Bootstrap components for a responsive and modern UI.
  API Integration: Submits form data to the Rails backend API for storage in a PostgreSQL database.

## Backend (Rails API)

### Description

- The backend is a RESTful API built using Ruby on Rails. It handles user data submitted from the frontend and interacts with a PostgreSQL database to store user information. The API is versioned under /api/v1 to ensure easy scalability and maintainability.
  Installation and Setup

- Navigate to the backend directory:

  ```bash
  cd backend
  ```

- Install the required gems:

  ```bash
  bundle install
  ```

- Setup the database:

  ```bash
  rails db:create
  ```

  ```bash
  rails db:migrate
  ```

- Start the Rails server:

  ```bash
  rails server
  ```

- The backend API will be available at

  ```bash
  http://localhost:3000/api/v1/users
  ```

### Key Features

- RESTful API Endpoints: Provides endpoints to create, read, update, and delete (CRUD) user information.
  PostgreSQL Database: Utilizes PostgreSQL for robust and scalable data storage.
  API Versioning: Implements versioning (/api/v1) to support future enhancements without breaking existing functionality.

- Running the Application
  To run the full application, ensure both the frontend and backend servers are running:

- Start the backend server:

  ```bash
  cd backend
  ```

  ```bash
  rails server
  ```

- Start the frontend server:

  ```bash
  cd frontend
  ```

  ```bash
  npm start
  ```

- Once both servers are up and running, open your browser and navigate to `http://localhost:3000` to access the frontend. The frontend will interact with the backend at `http://localhost:3000/api/v1/users`
  Monorepo Structure
- The monorepo structure allows you to manage both the frontend and backend projects in a single repository. This structure simplifies dependency management, version control, and deployment processes by keeping all related code in one place.

### Environment Variables

- Both the frontend and backend may require environment variables for configuration. Create a .env file in the backend directory and define any necessary variables:
  ```bash
  DATABASE_URL=postgres://username:password@localhost:5432/
  medical_project
  ```
  ```bash
  SECRET_KEY_BASE=your_secret_key
  ```
- For the frontend, environment variables can be defined in a .env file in the frontend directory:

  ```bash
  REACT_APP_API_URL=http://localhost:3000/api/v1/users
  ```

  ```bash
                    API Endpoints

  The backend API provides the following endpoints for user management:

  POST /api/v1/users: Create a new user
  GET /api/v1/users: Retrieve all users
  GET /api/v1/users/:id: Retrieve a specific user
  PUT /api/v1/users/:id: Update a specific user
  DELETE /api/v1/users/:id: Delete a specific user
  ```

### Deployment

- To deploy the monorepo to a service like Render:

- Ensure all dependencies are installed in both frontend and backend directories.
  Configure build and start commands:

- For the backend: bundle install && rails server
  For the frontend: npm install && npm run build

- Configure environment variables in the Render dashboard for both services.
- Deploy both services as separate web services on Render.
  Link the frontend service to the backend API URL using environment variables.
