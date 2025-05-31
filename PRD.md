# Product Requirements Document

## Overview
This project is a simple full-stack to-do list application. The goal is to enhance
its user experience, extend functionality, and prepare the codebase for
collaborative development and deployment.

## Objectives
- Modernize the UI with responsive design and improved styling.
- Introduce task management features like editing, completion tracking,
  sorting, and filtering.
- Improve user experience with better feedback and error handling.
- Optional: implement user authentication for personalized task lists.
- Refactor frontend code for maintainability and remove redundant files.
- Add testing and continuous integration.
- Prepare the application for deployment with environment variables and
  consistent code formatting.

## Implementation Steps
1. **Project Setup**
   - Install dependencies with `npm install` and verify the app runs via
     `npm start`. Confirm MongoDB connection.
2. **Clean Up Frontend Files**
   - Remove `public/Reva_script.js` and consolidate functionality into
     `public/script.js`.
3. **Responsive UI Improvements**
   - Apply a CSS framework (Bootstrap or Tailwind) to `index.html` and
     `styles.css` for layout and mobile support.
   - Add themes or dark mode if desired.
4. **Task Editing & Completion**
   - Extend `server.js` with an endpoint to update a task (PUT `/tasks/:id`).
   - Modify `taskSchema` to include a `completed` boolean.
   - Update `script.js` to allow inline editing and toggling completion.
5. **Sorting and Filtering**
   - Support query parameters on `GET /tasks` for sorting (e.g., by creation
     date or completion status) and filtering (active/completed).
   - Add UI controls to change sort or filter options.
6. **User Experience Enhancements**
   - Clear the text input after task creation.
   - Show loading indicators while communicating with the server.
   - Display error messages when requests fail.
   - Confirm before deleting a task to prevent mistakes.
7. **Optional User Accounts**
   - Create a `User` schema and endpoints for registration and login
     (`/register` and `/login`).
   - Use JWT or session-based authentication and associate tasks with users.
8. **Refactor Frontend Code**
   - Break `script.js` into modules or migrate to a framework (e.g., React).
   - Organize files into a clearer structure under `public/`.
9. **Testing and Continuous Integration**
   - Add Jest tests for backend routes and basic Cypress tests for the UI.
   - Configure GitHub Actions to run the test suite on every push.
10. **Deployment & Tooling**
   - Use environment variables via `.env` and provide a `.env.example` file.
   - Add ESLint and Prettier for code style and include them in CI.
   - Update `README.md` with setup, testing, and deployment instructions.

## Success Metrics
- All new features function correctly across desktop and mobile.
- Test suite passes and runs automatically in CI.
- Documentation clearly explains how to develop and deploy the app.
