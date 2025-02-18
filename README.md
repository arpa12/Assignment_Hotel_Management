# Hotel Management System

## Overview
This is a *Hotel Management System* built using *Laravel* for the backend and *React* for the frontend. The system includes an *admin login* and supports *CRUD (Create, Read, Update, Delete) operations* for managing hotel-related data.

## Features
- *Admin Authentication* (Login, Logout)
- *Manage Hotel Data* (CRUD operations)
- *Manage Room Bookings*

## Technologies Used
### Backend:
- *Laravel* (PHP Framework)
- *MySQL* (Database)
- *JWT Authentication*

### Frontend:
- *React.js*
- *Axios* (API Calls)
- *CSS* (Styling)

## Installation
### Backend (Laravel)
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/hotel-management.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   composer install
   ```
4. Set up .env file:
   ```bash
   cp .env.example .env
   ```
   - Configure database settings in the .env file.
5. Generate application key:
   ```bash
   php artisan key:generate
   ```
6. Run migrations and seed the database:
   ```bash
   php artisan migrate --seed
   ```
7. Start the Laravel server:
   ```bash
   php artisan serve
   ```

### Frontend (React)
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file and configure the API URL:
   ```bash
   REACT_APP_API_URL=http://localhost:8000/api
   ```
4. Start the React development server:
   ```bash
   npm start
   ```

## CRUD Property Details
- *Property Name*
- *Address*
- *Cost per Night*
- *Number of Available Rooms*
- *Property Image*

## API Endpoints
| Method | Endpoint              | Description |
|--------|-----------------------|-------------|
| POST   | /api/login          | Admin Login |
| GET    | /api/hotels         | Get all hotels |
| POST   | /api/hotels         | Create a new hotel |
| GET    | /api/hotels/{id}    | Get hotel details |
| PUT    | /api/hotels/{id}    | Update hotel details |
| DELETE | /api/hotels/{id}    | Delete a hotel |

## Admin Login Credentials (Default)

Email: admin@gmail.com  
Password: admin12345

## Contribution
Feel free to contribute to the project by submitting pull requests.


