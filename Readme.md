

## Purpose

Api for Application for web and mobile

## Installing

- Clone [this](/#) git library.
- Install [nodejs](https://nodejs.org)
- Open project folder in command line
  `$ cd /path/to/project`
- Run [npm](https://www.npmjs.com) to install all dependencies

  `$ [sudo] npm install`

- Run application by :  
   **1.** Using [nodemon](https://www.npmjs.com/package/nodemon)

        `$ [sudo] npm install -g nodemon`

        `$ nodemon`

---

# For Developers

#### **Config**

Exact config.js file has not been attached in this repo hence follow the following pattern to generate a config.js file.

```js
const mysql = require("mysql");

var dbConfigMySql = {
  host: "127.0.0.1",
  user: "root",
  password: "your-root-password",
  port: "3306",
  database: "your-database-name",
  connectionLimit: 15,
  queueLimit: 30,
  acquireTimeout: 1000000,
  multipleStatements: true,
};

exports.dbConfigMySql = dbConfigMySql;
var pool = mysql.createPool(dbConfigMySql);

exports.pool = pool;
```

#### **Status Codes**

    200 - Ok
    500 - Internal Server Error
    404 - File not found
    401 - Unauthorized
    403 - Forbidden
    ER_ROW_IS_REFERENCED_2 - Row is being used in other table
    ER_NO_REFERENCED_ROW_2 - Foreign key doesnot exist

#### Keep in mind

**For all requests (except login)**

[Header]
headerauth: [token]
Content-Type:application/x-www-form-urlencoded

## **App.js**

    - dbConfigMySql contains the details of the server which contains the database
    - limiter used to limit the number of requests from a single user
    - server runs on port 5555

## User

[_/api/user_](/routes/user.js)

Supported Method Types :

1.  _POST [body]_

    Purpose : Create new User

    Params to be passed in body :

        username : [string]
        email : [string]
        password : [string]
        firstName : [string]
        lastName : [string]
