const express = require("express");
const router = express.Router();
const pool = require("../config").pool;
var logger = require("../logger").Logger;
const bcrypt = require("bcryptjs");
const saltRounds = 10;

router.get("/", (req, res, next) => {
  var userId = req.query.userId;

  pool.getConnection(function (err, connection) {
    if (err) {
      logger.error("CONNECTION POOL ERROR : /api/get/User : " + err);
      res.status(500).send(JSON.stringify({ error: "DB_CONNECTION_ERROR" }));
      return;
    }
    connection.query(
      "select * from `user` where `userId`=COALESCE(?,`userId`)",
      [userId],
      function (error, results, fields) {
        connection.release();
        if (error) {
          logger.error("/api/get/user : " + error);
          res.status(500).send(JSON.stringify(error.code));
        } else {
          res.status(200).json(results);
        }
      }
    );
  });
});



router.delete("/:id", (req, res, next) => {
  const userId = req.params.id;
  pool.getConnection(function (err, connection) {
    if (err) {
      logger.error("CONNECTION POOL ERROR : /api/delete/User : " + err);
      res.status(500).send(JSON.stringify({ error: "DB_CONNECTION_ERROR" }));
      return;
    }
    connection.query("delete  from user where `userId`=?", [userId], function (
      error,
      results,
      fields
    ) {
      connection.release();
      if (error) {
        logger.error("/api/delete/User : " + error);
        res.status(500).send(JSON.stringify(error.code));
      } else {
        res.status(200).json(results);
      }
    });
  });
});

router.post("/", (req, res, next) => {
  var username = req.body.username;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var roleId = req.body.roleId;
  var panNo  = req.body.panNo;
  var contact  = req.body.contact;
  var  address = req.body.address;
  var  salary = req.body.salary;
  var  allowance = req.body.allowance;
  var  dasaiAllowance = req.body.dasaiAllowance;
  var password = req.body.password;
  var HashedPassword;
console.log(req.body);
  bcrypt.hash(req.body.password, saltRounds, function (hasherr, hash) {
    if (hasherr) {
      logger.error(
        "PASSWORD ENCRYPTION ERROR : /api/post/user/password : " + hasherr
      );
      res
        .status(500)
        .send(JSON.stringify({ error: "PASSWORD_ENCRYPTION_ERROR" }));
      return;
    }
    HashedPassword = hash;
    pool.getConnection(function (err, connection) {
      if (err) {
        logger.error("CONNECTION POOL ERROR : /api/post/User : " + err);
        res.status(500).send(JSON.stringify({ error: "DB_CONNECTION_ERROR" }));
        return;
      }
      connection.query(
        "INSERT INTO user (firstName,lastName,username, password, \
          roleId,email,contact,address,panNo,salary,allowance,dasaiAllowance) VALUES (?, ?, ?,?,?,?,?,?,?,?,?,?)",
        [[firstName], [lastName],[username], [HashedPassword],  [roleId],[email], 
          [contact], [address], [panNo],[salary], [allowance], [dasaiAllowance]],
        function (error, results, fields) {
          connection.release();

          if (error) {
            logger.error("/api/post/User : " + error);
            res.status(500).send(JSON.stringify(error.code));
          } else {
            res.status(200).json(results);
          }
        }
      );
    });
  });
});

router.patch("/password", (req, res, next) => {
  var userid = req.body.userId;
  var password = req.body.password;
  var HashedPassword;
  bcrypt.hash(password, saltRounds, function (hasherr, hash) {
    if (hasherr) {
      logger.error(
        "PASSWORD ENCRYPTION ERROR : /api/patch/user/password : " + hasherr
      );
      res
        .status(500)
        .send(JSON.stringify({ error: "PASSWORD_ENCRYPTION_ERROR" }));
      return;
    }
    HashedPassword = hash;
    pool.getConnection(function (err, connection) {
      if (err) {
        logger.error("CONNECTION POOL ERROR : /api/patch/user : " + err);
        res.status(500).send(JSON.stringify({ error: "DB_CONNECTION_ERROR" }));
        return;
      }
      connection.query(
        "update user set password=? where userId = ?",
        [[HashedPassword], [userid]],

        function (error, results, fields) {
          connection.release();
          if (error) {
            logger.error("/api/patch/user/password : " + error);
            res.status(500).send(JSON.stringify(error.code));
          } else {
            res.status(200).json(results.affectedRows);
          }
        }
      );
    });
  });
});

router.patch("/", (req, res, next) => {
  console.log(req.body);
  var username = req.body.username;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var roleId = req.body.roleId;
  var userId = req.body.userId;
  var panNo  = req.body.panNo;
  var contact  = req.body.contact;
  var  address = req.body.address;
  var  salary = req.body.salary;
  var  allowance = req.body.allowance;
  var  dasaiAllowance = req.body.dasaiAllowance;
  pool.getConnection(function (err, connection) {
    if (err) {
      logger.error("CONNECTION POOL ERROR : /api/patch/User : " + err);
      res.status(500).send(JSON.stringify({ error: "DB_CONNECTION_ERROR" }));
      return;
    }
    connection.query(
      "update user set firstName=?,lastName=?,username=?, \
         email=?, roleId=?,contact=?,address=?,panNo=?,salary=?,allowance=?,dasaiAllowance=? WHERE userId=?",
      [[firstName], [lastName],[username],[email], [roleId],  ,
       [contact], [address], [panNo],  [salary],[allowance],[dasaiAllowance],[userId]],
      function (error, results, fields) {
        connection.release();
        if (error) {
          logger.error("/api/patch/User : " + error);
          res.status(500).send(JSON.stringify(error.code));
        } else {
          res.status(200).json(results);
        }
      }
    );
  });
});

module.exports = router;
