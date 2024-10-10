## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Running the Project](#running-the-project)


## Project Overview

This project is a full-stack MVC (Model-View-Controller) application with:
- **Backend**: An API built using **Express** (Node.js framework) that handles business logic, database operations, and API endpoints.
- **Frontend**: A dynamic web interface built using **Remix** (a React-based framework) that fetches data from the backend and renders the views.

The project follows the MVC pattern where:
- **Model**: Manages the data and communicates with the database.
- **View**: Displays the data to the user (handled by Remix).
- **Controller**: Handles the request-response cycle (handled by Express).

## Technologies Used

### Backend:
- [Express](https://expressjs.com/)
- Database: [MongoDB](https://www.mongodb.com/) 
- [Mongoose](https://mongoosejs.com/)

### Frontend:
- [Remix](https://remix.run/) for building user interfaces.
- [React](https://reactjs.org/) for UI components.

### Additional Tools:
- [dotenv](https://www.npmjs.com/package/dotenv) for environment variable management.
- [nodemon](https://www.npmjs.com/package/nodemon) for backend development.
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code linting and formatting.

## Project Structure

```plaintext
root
├── backend/                    # Express Backend
│   ├── controllers/            # Controllers for handling routes
│   ├── models/                 # Database models
│   ├── routes/                 # Express route definitions
│   ├── node_modules/
│   ├── server.js               # Main entry point for Express server
│   └── .env                    # Environment variables for the backend
├── frontend/                   # Remix Frontend
│   ├── app/                    # Remix app code (routes, components, etc.)
│   ├── public/                 # Static assets
│   ├── package.json            # Frontend dependencies and scripts
│   └── .env                    # Environment variables for the frontend
|—— node modules /                   
├── package.json                # Root package.json for backend dependencies and scripts
└── README.md                   # Project documentation

```

## Running the Project

1. Install the dependencies (both front and back)
2. Type npm run for both front and back
