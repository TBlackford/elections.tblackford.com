const express = require('express');
const { requireAuth } = require('./middleware');
const { Country } = require('../database/schemas');
const R = require('ramda');

const router     = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    Country.find({}, { __v: 0 }, (err, countries) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            res.send({ message: 'Countries retrieved successfully', countries });
        }
    }).sort({name: -1});
});

router.get('/:country', (req, res) => {
    Country.findOne({ isoCode: req.params.country.toUpperCase() }, { __v: 0 }, (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            res.send({ message: 'Country retrieved successfully', country });
        }
    });
});

router.get('/:country/:year', (req, res) => {
    Country.findOne({ isoCode: req.params.country.toUpperCase() }, { __v: 0 }, (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            countryObj = country.toObject();
            let years = countryObj.elections[req.params.year];
            if (R.isEmpty(years)) {
                res.send({ message: 'No years for that country' });
            } else {
                res.send({ message: 'Country retrieved successfully', years });
            }            
        }
    });
});

router.get('/:country/:year/:election', (req, res) => {
    var { country, year, election } = req.params;
    electionParam = election.split('_').join(' ');
    Country.findOne({ isoCode: country.toUpperCase() }, { __v: 0 }, (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            countryObj = country.toObject();
            
            let election = {};

            for(var i = 0; i < countryObj.elections[year].length; i++) {
                if(countryObj.elections[year][i].electionType == electionParam) {
                    election = countryObj.elections[year][i];
                }
            }

            if (R.isEmpty(election)) {
                res.send({ message: 'No years for that country' });
            } else {
                res.send({ message: 'Country retrieved successfully', election });
            }
        }
    });
});
