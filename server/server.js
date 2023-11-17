const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { GoogleAuth } = require('google-auth-library');
const nodemailer = require('nodemailer');
require('dotenv').config();
const saltRounds = 10;
const app = express();
app.use(cors());
app.use(express.json());
const apiRouter = express.Router();
app.use('/api', apiRouter);
const rateLimit = require('express-rate-limit');

const connection = mysql.createConnection({
  host:  process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});




apiRouter.post('/login', (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  const values = [req.body.email];

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
          res.status(200).json({ status: 'success', user: result[0] });
        } else {
          // Passwords don't match
          res.status(200).json({ status: 'error', message: "El correo electrónico o contraseña que ingresaste no es correcto."  });
        }
      });
    } else {
      res.status(200).json({ status: 'error', message: "El correo electrónico o contraseña que ingresaste no es correcto." });
    }
  });
});

// Enpoints para el CRUD de usuarios
// Endpoint para consultar todos los usuarios
apiRouter.get('/getusers', (req, res) => {
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
apiRouter.post('/adduser', (req, res) => {
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

apiRouter.post('/edituser', (req, res) => {
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

apiRouter.delete('/deluser', (req, res) => {
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


const auth = new GoogleAuth({
  keyFilename: './optiaudio-507a2d27edce.json',
  scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
});

const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const analyticsDataClient = new BetaAnalyticsDataClient({auth});

apiRouter.get('/analytics', async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '2020-11-16',
          endDate: 'today',
        },
      ],
     dimensions: [ 
        { name: 'city' },
     ],
      metrics: [
        { name: 'activeUsers' },
        { name: 'newUsers' },
        { name: 'engagementRate' },
      ],
    });

    const totalUsersResponse = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '2020-11-16',
          endDate: 'today',
        },
      ],
      dimensions: [
        { name: 'date' },
      ],
      metrics: [
        { name: 'totalUsers' },
        { name: 'activeUsers' },
      ],
      orderBys: [
        { 
          dimension: {
            dimensionName: 'date',
          }, 
          sortOrder: 'ASCENDING' 
        },
      ],
    });
   
    res.json({ metricsData: response, totalUsersData: totalUsersResponse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


const apiLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  handler: function(req, res, /*next*/) {
    res.status(429).json({ message: 'Demasiadas solicitudes, por favor intenta de nuevo más tarde.' });
  }
});

apiRouter.post('/send-email',apiLimiter, (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'optiaudiositioweb@gmail.com',
      pass: process.env.GM_PASSWORD
    }
  });
  
  let mailOptions = {
    from: req.body.email,
    to: 'optiaudiositioweb@gmail.com',
    subject: `Pregunta optiaudio: ${req.body.name} de ${req.body.email}`,
    text: `Mensaje: ${req.body.message}. Email y telefono de contacto: ${req.body.email} - ${req.body.phone}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ message: 'Email sent successfully' });
    }
  }); 
});

//Email code

 
app.listen(3000, () => {
  console.log('Server is running at port 3000');
})
