const express = require('express');
const { requireAuth } = require('./middleware');
const { Country, Election } = require('../database/schemas');
const R = require('ramda');

const router     = express.Router();

module.exports = router;

const send = (res, err, elections) => {
    if (err) {
        res.status(400).send({ message: 'Get election failed', err });
    } else {
        if(elections.length == 0) {
            res.send({ message: 'No elections found' });
        } else {
            res.send({ message: 'Elections retrieved successfully', elections });
        }
    }
}

router.get('/', (req, res) => {
    Election.find({}, { __v: 0 }, (err, elections) => {
        send(res, err, elections);
    }).sort({name: -1});
});

router.get('/:country', (req, res) => {
    Country.findOne({
        isoCode: req.params.country.toUpperCase()
    }, { __v: 0 }, (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            Election.find({
                country: country._id
            }, { _id: 0, __v: 0 }, (err, elections) => {
                send(res, err, elections);
            }).populate('country').sort({name: -1});   
        }
    });    
});

router.get('/:country/:year', (req, res) => {
    Country.findOne({
        isoCode: req.params.country.toUpperCase()
    }, { __v: 0 }, (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            Election.find({
                country: country._id,
                year: req.params.year
            }, { _id: 0, __v: 0 }, (err, elections) => {
                send(res, err, elections);
            }).populate('country').sort({name: -1});   
        }
    });    
});

router.get('/:country/:year/:election', (req, res) => {
    Country.findOne({ isoCode: req.params.country.toUpperCase() }, { __v: 0 }, (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            Election.find({
                country: country._id,
                year: req.params.year,
                electionType: req.params.election.split("_").join(" ")
            }, { _id: 0, __v: 0 }, (err, elections) => {
                send(res, err, elections);
            }).populate('country').sort({name: -1});   
        }
    });    
});