# Full-Stack-Todo-List-Application-Heroku-Deployment
# To-Do List Full Stack Application

This repository contains the code for a full-stack To-Do List application built with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.

## Overview

The application allows users to add tasks to a to-do list, and delete them when completed. The tasks are stored in a MongoDB database, so they persist across sessions.

The front-end of the application is built with HTML, CSS, and JavaScript. It provides a simple and intuitive user interface for interacting with the to-do list.
The interface now uses Bootstrap 5 for a modern, responsive layout. A dark mode toggle lets you switch themes without reloading the page.

The back-end of the application is built with Node.js and Express.js. It provides API endpoints for creating, retrieving, and deleting tasks.

## Getting Started

To get started with this project, clone the repository and install the dependencies.

```bash
git clone https://github.com/your-username/todo-list.git
cd todo-list
npm install
```

You will also need to have MongoDB installed and running on your local machine. You can find instructions for installing MongoDB in the [official MongoDB documentation](https://docs.mongodb.com/manual/installation/).

## Running the Application

To start the server, run the following command:

```bash
node server.js
```

Then, open `index.html` in a web browser to interact with the application.

## Deployment

This application is ready to be deployed on a platform like Heroku. A `Procfile` is included in the repository, which specifies the commands to be executed by the Heroku platform to start the application.

## Contributing

Contributions to this project are welcome. If you find a bug or think of a new feature, please open an issue to discuss it. Pull requests for bug fixes and enhancements are also appreciated.

Please make sure to test your changes thoroughly before submitting a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
