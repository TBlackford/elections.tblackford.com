const express = require('express');
const { requireAuth } = require('./middleware');
const { Map } = require('../database/schemas');
const R = require('ramda');

const router     = express.Router();

module.exports = router;

////////////////////////////////////////////////////////////
// Helper route functions

const send = (res, err, map) => {
    if (err) {
        res.status(400).send({ message: 'Get election failed', err });
    } else {
        res.send({ message: 'Map retrieved successfully', map });
    }
}

////////////////////////////////////////////////////////////
// Routes

router.get('/:country/:year/:election', (req, res) => {
    Map.find({
        isoCode: req.params.country.toUpperCase(),
        year: req.params.year,
        electionType: req.params.election.split("_").join(" ")
    }, { geojson: 1 },  function(err, map) {
        send(res, err, map[0].geojson);
    });
});