const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
//LEFT OFF HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// return all genres by movie id
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "favorites";'
    console.log('in fave router.get', req.body)
    pool.query(queryText)
    .then( result => {
      console.log(result.rows)
        res.send(result.rows)
    }).catch( error => {
        console.log('error in favorite GET', error)
        res.sendStatus(500);
    })
  })

module.exports = router;