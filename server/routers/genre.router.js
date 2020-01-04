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
    console.log('Error getting genres from the database:',error);
    res.sendStatus(400);
  })
})

router.post('/',(req,res)=>{
  const genre = req.body.newGenre;
  console.log('Incoming genre:', genre);
  let queryString = `INSERT INTO genre ("name") VALUES ($1);`
  pool.query(queryString, [genre]).then(result=>{
    res.sendStatus(200);
  }).catch(error=>{
    console.log('Error posting new genre to database:',error);
    res.sendStatus(400);
  })
})

router.delete('/:id',(req,res)=>{
  let queryString = `DELETE FROM genre WHERE id=$1;`;
  pool.query(queryString,[req.params.id]).then(result=>{
    res.sendStatus(200);
  }).catch(error=>{
    console.log('Error deleting genre from database:',error);
    res.sendStatus(400);    
  })
})

// EXPORT THE ROUTES
module.exports = router;