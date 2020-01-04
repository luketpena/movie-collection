// REQUIRES
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// ROUTES

//Gets all of the events ordered by date
router.get('/',(req,res)=>{
  let queryString = `
    SELECT m.id, m.name, g.name AS genre, m.date, m.img_url, m.runtime FROM genre g
    RIGHT JOIN movie m ON g.id=m.genre_id
    ORDER BY m.id;
  `;
  pool.query(queryString).then(result=>{
    res.send(result.rows);
  }).catch(error=>{
    console.log('Error getting movies from the database:',error);
    res.sendStatus(400);
  })
})

// EXPORT THE ROUTES
module.exports = router;