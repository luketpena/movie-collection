//-----< Requires >-----\\
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//-----< Routes >-----\\

//Gets all the movies and their genres ordered by the movie ID
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
});

//Posts a new movie and its genre to the database
router.post('/',(req,res)=>{
  let {name,genre,date,img_url,runtime} = req.body;
  genreNum = Number(genre);
  runtimeNum = Number(runtime)
  console.log('Incoming',genreNum);
  
  let queryString = `INSERT INTO movie ("name","genre_id","date","img_url","runtime") VALUES ($1,$2,$3,$4,$5);`;
  pool.query(queryString, [name,genreNum,date,img_url,runtimeNum]).then(result=>{
    res.sendStatus(200);
  }).catch(error=>{
    console.log('Error posting new movie to database:',error);
    res.sendStatus(400);
  })
})

//Removes a movie from the database
router.delete('/:id',(req,res)=>{
  let queryString = 'DELETE FROM movie WHERE id=$1;';
  pool.query(queryString, [req.params.id]).then(result=>{
    res.sendStatus(200);
  }).catch(error=>{
    console.log('Error deleting movie from database:',error);
    res.sendStatus(400);
  })
})

//-----< Export >-----\\
module.exports = router;