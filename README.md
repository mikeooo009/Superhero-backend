# Humble Superhero API

## Overview
The **Humble Superhero API** is a simple RESTful API that allows users to:
- Add a new superhero with their name, superpower, and humility score.
- Retrieve a list of superheroes sorted by their humility score in descending order.

## Technologies Used
- **Node.js** (Runtime Environment)
- **Express.js** (Web Framework)
- **body-parser** (Middleware for parsing JSON requests)
- **express-validator** (Validation Middleware)
- **CORS** (Handling Cross-Origin Requests)
- **Jest** (For Testing - Optional if implemented)

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** installed on your system. You can verify by running:
```sh
node -v
```

### Steps to Run the Project
1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/humble-superhero-api.git
   cd humble-superhero-api
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start the server**
   ```sh
   npm start
   ```
4. The API will be running at:
   ```
   http://localhost:3000
   ```

## API Endpoints
### 1. Add a Superhero
#### `POST /superheroes`
Adds a new superhero with a humility score between **1 and 10**.

**Request Body:**
```json
{
  "name": "Superman",
  "superpower": "Flight",
  "humilityScore": 8
}
```

**Response:**
```json
{
  "message": "Superhero added successfully",
  "superhero": {
    "name": "Superman",
    "superpower": "Flight",
    "humilityScore": 8
  }
}
```

### 2. Retrieve Superheroes (Sorted by Humility Score)
#### `GET /superheroes`
Fetches all superheroes sorted by their humility score in descending order.

**Response Example:**
```json
[
  {
    "name": "Superman",
    "superpower": "Flight",
    "humilityScore": 8
  },
  {
    "name": "Batman",
    "superpower": "Martial Arts",
    "humilityScore": 7
  }
]
```

## Validation & Error Handling
- Ensures **name** and **superpower** are required.
- **humilityScore** must be an integer between **1 and 10**.
- Returns proper error messages for invalid requests.

## Testing (Bonus)
If tests are implemented using Jest, run them using:
```sh
npm test
```

## Collaboration
If I were working with a teammate, I would:
- Use Git for **branch-based development**.
- Discuss API design decisions **before implementation**.
- Write **clear documentation** and comments.
- Conduct **code reviews** for better quality control.

## If I Had More Time
- **Implement a database** (e.g., MongoDB or PostgreSQL) instead of an in-memory array.
- **Create a frontend** using React for a real-time superhero dashboard.
- **Add more features**, like updating or deleting superheroes.
- **Enhance testing** coverage using Jest and Supertest.

## Submission
You can submit your solution via a **GitHub repo** or as a **zip file**.

---
**Author:** Your Name  
**GitHub:** [yourusername](https://github.com/yourusername)

