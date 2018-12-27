const express = require('express');
const { requireAuth } = require('./middleware');
const { Country } = require('../database/schemas');

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
