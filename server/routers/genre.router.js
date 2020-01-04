// REQUIRES
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// ROUTES

//Gets all of the events ordered by date
router.get('/',(req,res)=>{
  let queryString = `
    SELECT g.id, g.name, COUNT(m.genre_id) FROM movie m
    RIGHT JOIN genre g ON g.id=m.genre_id
    GROUP BY g.name, g.id
    ORDER BY g.id;
  `;
  pool.query(queryString).then(result=>{
    res.send(result.rows);
  }).catch(error=>{
    console.log('Error getting events from the database:',error);
    res.sendStatus(400);
  })
})

// EXPORT THE ROUTES
module.exports = router;