# My To-Do List

A simple to-do list web app using REST API

## Getting started

1. Get a copy of the repository via download or via pull request
2. Place it in a directory that is easy to navigate

### Prerequisities

1. wamp or xampp - for you to have an environment to run the web app

### Installing

#### Directory Placing
1. Navigate through your wamp or xampp folders and place the folder named 'project' in the folder where source codes are being ran. (www folder for wamp)

#### Database Setup
1. Startup wamp or xampp and then open your favorite browser
2. Navigate to http://localhost/phpmyadmin then login using your username and password
2. After logging in, navigate through the toolbar and click 'Import'
3. You will see a 'Choose file' button, click this, and find the directory where the code is placed
4. Choose the api_db.sql as the file to import, don't change anything in the option below and press 'Go'
5. You now have the database in your own machine.

#### Application Setup
1. Go to the directory where the web application is located
2. Go to project/api/config and then open database.php file
3. In lines 7 & 8, change the username and password to your own database's and hit save
4. You can now run the web app

#### Running the To-do list app
1. Make sure your wamp/xampp is running
2. Open your favorite browser
3. Type in http://localhost/project/api
4. Enjoy the simple to-do list app

## Acknowledgements
1. https://gist.github.com/PurpleBooth/109311bb0361f32d87a2 serves as a guide to create this README.md
2. https://www.codeofaninja.com/2017/02/create-simple-rest-api-in-php.html serves as a guide on how to implement REST API on php
3. https://www.codeofaninja.com/2015/06/php-crud-with-ajax-and-oop.html serves as guide on how to use AJAX CRUD
