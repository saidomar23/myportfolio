const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryString = `SELECT * FROM "projects"`
    pool.query(queryString)
    .then( (result) => {
        res.send(result.rows);
    })
    .catch( (error) => {
        console.log(`Error on query ${error}`);
        res.sendStatus(500);
    });
  });

  router.post('/' ,  (req , res)=>{
      const project = req.body
      const queryString = `INSERT INTO "projects" ("name" , "description" , "website" , "github" , "date_completed" , "tag_id") 
      VALUES ($1, $2, $3 , $4, $5 , $6)`
      pool.query(queryString , [project.name , project.description , project.website , project.github , project.date_completed , project.tag])
      .then((result)=>{
          res.sendStatus(200);
      }).catch(error =>{
          console.log('error in post server' , error);
          res.sendStatus(500)
      })
  })

  router.delete('/:id' , (req , res)=>{
      const id = req.params.id
      pool.query(`DELETE FROM "projects" WHERE "id" = $1` , [id])
      .then(results =>{
          res.sendStatus(204)
      }).catch(error =>{
          console.log('error in delete route' , error);
          res.sendStatus(500)
      })
  })


module.exports = router;
