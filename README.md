# MERN Blog Platform: https://mern-blog-platform.vercel.app

# Personal Blog Platform

A full-stack web application for creating and publishing blog posts, with a focus on deployment and maintenance best practices.

## Features

- User authentication and authorization
- Create, edit, and delete blog posts
- Comment on blog posts
- Markdown support for writing posts
- Responsive design for mobile and desktop
- Admin panel for content management

## Tech Stack

### Backend

- Node.js with Express.js
- MongoDB for database
- JWT for authentication
- Winston for logging
- PM2 for process management

### Frontend

- React.js
- React Router for navigation
- Tailwind CSS for styling
- Axios for API requests
- Sentry for error tracking

### DevOps

- Git & GitHub for version control
- GitHub Actions for CI/CD
- Render for backend hosting
- Vercel for frontend hosting
- Environment variables for configuration

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation
- GitHub account
- Render account
- Vercel account

### Local Development Setup

1. Clone the repository

```bash
git clone https://github.com/tbrowns/mern-blog-platform.git
cd mern-blog-platform
```

2. Setup Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env file with your MongoDB connection string
npm run dev
```

3. Setup Frontend

```bash
cd frontend
npm install
cp .env.example .env
# Edit .env file with your API URL
npm start
```

## Deployment Guide

### Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure build command: `cd backend && npm install && npm run build`
4. Configure start command: `cd backend && npm start`
5. Add environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Secret key for JWT
   - `NODE_ENV`: Set to "production"

### Frontend Deployment (Vercel)

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Configure build settings:
   - Root directory: `frontend`
   - Build command: `npm run build`
   - Output directory: `build`
4. Add environment variables:
   - `REACT_APP_API_URL`: Your Render backend URL
   - `REACT_APP_SENTRY_DSN`: Your Sentry DSN

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

1. On every push to `main` or `develop` branch, tests are automatically run
2. Pull requests to these branches also trigger the test suite
3. Failed tests prevent merging of code
4. Successful builds on the `main` branch trigger automatic deployments to Render and Vercel

See `.github/workflows/ci.yml` for the complete workflow configuration.

## Monitoring and Error Tracking

### Backend Monitoring

- Winston for logging errors and requests
- Render dashboard for server metrics and logs
- PM2 for process monitoring and management

### Frontend Error Tracking

- Sentry for real-time error reporting
- User session recording for debugging
- Error boundaries for graceful UI error handling

## Security Measures

1. All communication uses HTTPS
2. JWT for secure authentication
3. Password hashing using bcrypt
4. Environment variables for sensitive credentials
5. Input validation on all API endpoints
6. XSS protection with appropriate headers
7. CORS configuration to restrict API access

## Contributing

1. Create a feature branch from `develop`

```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit

```bash
git commit -m "Description of changes"
```

3. Push your branch and create a pull request

```bash
git push origin feature/your-feature-name
```

4. Wait for CI tests to pass
5. Request a code review
6. After approval, merge into `develop`
