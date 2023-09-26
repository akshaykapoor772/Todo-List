# Simple-ToDo-App

## Overview
The Simple-ToDo-App is a lightweight, user-friendly application that allows users to maintain their daily tasks effectively. It's a combination of HTML, CSS, and JavaScript for the frontend, while the backend is powered by a Node.js Express server.

## Key Features
1. Adding Tasks: Input your tasks and add them to your to-do list.
2. Delete Tasks: Easily remove tasks with a click on the 'X' button.
3. Strike-through Tasks: Mark tasks as completed by clicking on them.
4. Double Click Removal: For ease, double-clicking on a task will also remove it from the list.
5. Submit Tasks: After you've added all your tasks, you can submit them, and they'll be sent to the server.

## Files Overview
1. index.html: The main structure of the application. Contains the layout and elements for inputting and displaying tasks.

2. style.css: Gives the application a clean look, making it easy on the eyes and straightforward to use.

3. script.js: Powers the interactivity of the to-do list, handling events like adding, deleting, marking tasks, and communicating with the server.

4. server.js: A simple Express server that handles incoming tasks from the client and can be extended for further functionalities.

5. replit.nix: Configuration for Replit code editor to ensure compatibility and provide necessary dependencies.

## Running the Application

1. Frontend:

* Open the index.html file in any web browser.

2. Backend:

* Navigate to the directory containing the project.
* Run npm install express to install the necessary dependencies.
* Start the server with node server.js. The server will start on port 3000.

## Dependencies
The backend of the application is built using:

* Node.js
* Express.js

The frontend uses vanilla HTML, CSS, and JavaScript.

## Contributing
Contributions, issues, and feature requests are welcome! Please check the issues page for any reported bugs or enhancements. Before proposing major changes or enhancements, open an issue to discuss the intended changes.

