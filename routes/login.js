const express = require("express");
const router = express.Router();
const pool = require("../config").pool;
var logger = require("../logger").Logger;
const saltRounds = 10;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  console.log("body",req.body)
  pool.getConnection(function (err, connection) {
    if (err) {
      logger.error("CONNECTION POOL ERROR : /api/post/login : " + err);
      res.status(500).send(JSON.stringify({ error: "DB_CONNECTION_ERROR" }));
    } else {
      var query = "SELECT * FROM `user` WHERE  `username`=?";
      connection.query(query, [[username]], function (error, results, fields) {
        connection.release();
        if (error) {
           logger.error("/api/post/login : " + error);
          console.log("error", error);
          res.status(500).send(JSON.stringify(error.code));
        } else if (results.length == 0) {
          res.status(401).send();
        } else {
          // console.log(results);
          var pass = results[0].password;
          // console.log("pass", pass)
          bcrypt.compare(password, pass, function (matcherror, match) {
            if (match) {
              var jsonrec = results[0];
              var options = {
                expiresIn: "1d",
              };
              payload = {
                user: results[0].userid,
              };
              const token = jwt.sign(payload, process.env.SECRET_KEY, options);
              results.push({ token: token });
              //  res.status(200).json(results);
              res.status(200).json({
                data: results,
                // token: token
              });
            } else {
              console.log(match);
              res.sendStatus(401);
            }
          });
        }
      });
    }
    // });
  });
});

module.exports = router;
