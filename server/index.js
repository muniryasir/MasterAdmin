// server/index.js

const express = require("express");
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const db = knex({
  client: 'pg',
  connection: {
      host: process.env.DATABASE_HOST,
      database: "admindb",
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      
  },
});

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
  
});

// GET: Fetch movie by movieId from the database
app.post('/checkuser', (req, res) => {
  const {
    username,
    password,
  } = req.body.user;
  var msg="works";
  // return 
  db.select('*')
      .from('users')
      .where('username', '=', username)
      .where('password', '=', password)
      .then((data) => {
          
          // res.json(data);
          // msg = data;
          var count = Object.keys(data).length;
          console.log(count);
          msg = count;
          res.json({ message: msg });
      })
      .catch((err) => {
          console.log(err);
          
          msg = err;
          res.json({ message: msg });
      });
  

});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});