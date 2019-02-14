const express = require('express');
const { requireAuth } = require('./middleware');
const { Country } = require('../database/schemas');
const R = require('ramda');

const router     = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    Country.find(req.body.id, { __v: 0 }, (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            res.send({ message: 'Country retrieved successfully', country });
        }
    }).sort({name: -1});
});

router.get('/all', (req, res) => {
    Country.find({}, { __v: 0 }, (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            res.send({ message: 'Country retrieved successfully', country });
        }
    });
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
            let years = {};

            countryObj = country.toObject();

            for(election in countryObj.elections) {
                for (var i = 0; i < countryObj.elections[election].length; i++) {
                    if (countryObj.elections[election][i].year == req.params.year)
                        years[election] = countryObj.elections[election][i];
                }
            }

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
            let election = {};

            countryObj = country.toObject();

            for (var i = 0; i < countryObj.elections[electionParam].length; i++) {
                if (countryObj.elections[electionParam][i].year == year)
                election = countryObj.elections[electionParam][i];
            }

            if (R.isEmpty(election)) {
                res.send({ message: 'No years for that country' });
            } else {
                res.send({ message: 'Country retrieved successfully', election });
            }
        }
    });
});

router.post('/', requireAuth, (req, res) => {
    const newCountry = Country(req.body);

    newCountry.save((err, savedCountry) => {
        if (err) {
            res.status(400).send({ message: 'Create country failed', err });
        } else {
            res.send({ message: 'Country created successfully', country: savedCountry.hide() });
        }
    });
});

router.delete('/', requireAuth, (req, res) => {
    Country.findByIdAndRemove(req.body.id, err => {
        if (err) {
            res.status(400).send({ message: 'Delete country failed', err });
        } else {
            res.send({ message: 'Country successfully delete' });
        }
    });
});
