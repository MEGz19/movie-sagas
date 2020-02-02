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




module.exports = router;
