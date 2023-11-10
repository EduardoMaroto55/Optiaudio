const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'clinica'
});

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  const values = [req.body.email];
  const finalSql = connection.format(sql, values);

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error"});
      return;
    }
    if (result.length > 0) {
      bcrypt.compare(req.body.password, result[0].password, function (err, isMatch) {
        if (err) {
          console.error(err);
          res.status(500).json({ message: "Internal server error" });
          return;
        }
        if (isMatch) {
          // Passwords match
          res.json({ status: 'success', user: result[0] });
        } else {
          // Passwords don't match
          res.json({ status: 'error', message: "Wrong username/password combination!" + finalSql });
        }
      });
    } else {
      res.json({ message: "Wrong username/password combination!" + sql });
    }
  });
});

// Enpoints para el CRUD de usuarios
// Endpoint para consultar todos los usuarios
app.get('/getusers', (req, res) => {
  const sql = "SELECT id, first_name, last_name, phone_number, password, email FROM users";
  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.json(result);
  });
});


// Endpoint para agregar un usuario
app.post('/adduser', (req, res) => {
  const { name, apellido, email, password, telefono } = req.body;
  // Hash the password
  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    const sql = "INSERT INTO users (first_name, last_name,phone_number,password,email) VALUES (?, ?, ?, ?, ?)";
    connection.query(sql, [name, apellido, telefono, hashedPassword, email], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
        return;
      }
      res.json({ message: "User added successfully", userId: result.insertId });
    });
  });
});

app.post('/edituser', (req, res) => {
  const { name, apellido, email, password, telefono,id } = req.body;
  let sql = "UPDATE users SET first_name = ?, last_name = ?, email = ?, phone_number = ? WHERE id = ?";
  let values = [name, apellido, email, telefono, id];
  // If password field is not empty, include it in the update query
  if (password) {
    bcrypt.hash(password, 10).then(hashedPassword => {
      sql = "UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?, phone_number = ? WHERE id = ?";
      values = [name, apellido, email, hashedPassword, telefono, id];
      
      connection.query(sql, values, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: "Internal server error" });
          return;
        }
       
        res.json({ message: "User updated successfully" });
      });
    });
  } else {
    connection.query(sql, values, (err, result) => {
      if (err) {
      
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
        return;
      }
      res.json({ message: "User updated successfully" });
    });
  }
});

app.delete('/deluser', (req, res) => {
  const userId = req.body.id;
  connection.query('DELETE FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
     
  const finalSql = connection.format(sql, userId);
  console.log(finalSql);
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.json({ message: "User deleted successfully" });
  });
});

app.listen(3000, () => {
  console.log('Server is running at port 3000');
})
