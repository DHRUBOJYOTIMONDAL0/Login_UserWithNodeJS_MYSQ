# Node.js Project with MySQL for User Login

## Steps to Set Up

### 1. Install Node.js and npm
First, install Node.js and npm on your local machine using the following command:

```bash
sudo apt install nodejs npm


2. Initialize a Node.js Project
Navigate to your project directory and run:

bash
Copy code
npm init

This will create a package.json file for your project.

3. Install MySQL Package
Install the MySQL package using npm:

bash
Copy code
npm install mysql

Create a Database Connection
In your project, create a file (e.g., database.js) and configure your database connection:

javascript
Copy code
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'your-hostname',  // e.g., 'localhost'
    user: 'root',           // Change to your MySQL username
    password: 'your-password',  // Use your MySQL server password
    database: 'nodejs'      // Provide your own database name
});

5. Install Express
Install the Express framework:

bash
Copy code
npm install express

6. Install Body-Parser
Install Body-Parser to handle incoming request bodies:

bash
Copy code
npm install body-parser
7. Port Configuration
Ensure your MySQL server port number does not conflict with your application port. For example, if your MySQL port number is 3306, choose a different port for your application, such as 3000.

8. Run Your Application
Navigate to the directory containing your main application file (e.g., login.js) and start your application with:

bash
Copy code
node login.js
This will start your Node.js application and connect it to MySQL for handling user login functionality.