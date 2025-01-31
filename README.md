# Expense-Tracker-Backend
Intern
# Mini Expense Tracker with Intelligent Insights

A full-stack expense tracking application with JWT authentication, expense management, and data-driven spending insights. Built with React, Node.js, and MongoDB.

![Demo Screenshot](https://via.placeholder.com/800x400.png?text=Expense+Tracker+Demo) <!-- Add your screenshot here -->

## Features

- **User Authentication**: Secure JWT-based login/registration with refresh tokens.
- **Expense Management**: Add, edit, delete, and filter expenses by date/category.
- **Spending Insights**: Visualize expenses with pie/bar charts (total per category, percentage distribution).
- **Light/Dark Theme**: Toggle between themes (bonus feature). <!-- Add if implemented -->
- **Pagination**: Browse expenses with paginated results.

## Tech Stack

- **Frontend**: ReactJS, Material-UI (MUI), Recharts
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT with HTTP-only cookies
- **Deployment**: Vercel (frontend), Render/Heroku (backend)

## Installation

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker/backend



   Authentication
Endpoint	Method	Description	Example Request Body
/api/auth/register	POST	Register a new user	{ firstName, lastName, email, password }
/api/auth/login	POST	Login and get JWT tokens	{ email, password }
/api/auth/logout	POST	Invalidate refresh token	-
Expenses
Endpoint	Method	Description	Query Parameters
/api/expenses	GET	Get paginated expenses	page, limit, category, startDate, endDate
/api/expenses	POST	Add a new expense	{ amount, category, date, description }
/api/expenses/:id	DELETE	Delete an expense	-

Insights
Endpoint	Method	Description
/api/insights	GET	Get spending analytics


