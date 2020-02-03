const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();


//GET request to "movies" database
// return all favorite movies
router.get('/', (req, res) => {
    // return all categories
    const queryText = `SELECT * FROM "movies" ORDER BY "title"`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

//GET requst to movies database to return
//movies by id
router.get('/:id', (req, res) => {
    // return all categories
    console.log(req.params)
    const queryText = `SELECT * FROM "movies" WHERE "id"=$1`;
    pool.query(queryText, [req.params.id])
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});




module.exports = router;
