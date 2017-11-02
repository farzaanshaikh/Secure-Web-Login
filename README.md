# Secure Web Login

### Introduction
The purpose of this project is to learn about **Node.js**. In itself it isn't qualified to be call a project, however it makes use of a NoSql database (MongoDB)
and some other very useful packages and is a great place to get started into a new
development environment (especially for beginners), not to mention this can be directly used when in need of a ready-made efficient and scalable login for your project. [Passport](http://www.passportjs.org/) can also be used to create logins based on facebook, Google, twitter etc. However it has not been implemented in this project.

### Security

This Login system makes use of [Passport](http://www.passportjs.org/) that for the login functionality. The stored Passwords are hashed to provide security from database attacks. Since this makes use of MongoDB, SQL injections are not possible and the use of mongoose automatically deals with NoSQL query injections. However it may be prone to other attacks such as phishing or session hijacking that must be locally dealt with.

### Prerequisites

Here are the things you will need to get started:

* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)

For Windows using [GitSCM](https://git-scm.com/downloads) is a good alternate to
the command promt as it is more like a linux terminal. You don't really need this.

### Installing and Running

We will use express for the template. Here are the steps to install and run :

- Open the directory in terminal where you want to install the app and use the following commands:
  - `npm install -g express`
  - `npm install -g express-generator`
  - `express`
- Copy and replace the files from this project in your folder.
- In the terminal type the command `npm install`. This will install all the dependencies mentioned in the package.json file.
- Use the `npm start` command to start the app on localhost.
- Open `localhost:3000` on your browser (I used Firefox 56).

### Built With

* [Express](https://expressjs.com/) - Web framework
* [Bootstrap](http://getbootstrap.com/) - Front-end Library
* [bcryptjs](https://www.npmjs.com/package/bcrypt) - Encryption-Decryption tool
* [Mongoose](http://mongoosejs.com/) - MongoDB object modeling
* [Passport](http://www.passportjs.org/) - Login Framework
