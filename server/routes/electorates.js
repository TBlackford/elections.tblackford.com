const express = require('express');
const { requireAuth } = require('./middleware');
const { Country, Electorate } = require('../database/schemas');
const R = require('ramda');

const router     = express.Router();

module.exports = router;

////////////////////////////////////////////////////////////
// Helper route functions

const send = (res, err, electorates) => {
    if (err) {
        res.status(400).send({ message: 'Get electorate failed', err });
    } else {
        if(electorates) {
            if(electorates.length == 0) {
                res.send({ message: 'No electorates found' });
            } else {
                res.send({ message: 'Electorates retrieved successfully', electorates });
            }
        }
    }
}

////////////////////////////////////////////////////////////
// Adding to the db

router.get('/', (req, res) => {
    Electorate.find({}, { __v: 0 }, (err, electorates) => {
        send(res, err, electorates);
    }).sort({ name: 1 }).populate('country');
});

router.get('/:country/:year', (req, res) => {
    // First, find the country
    Country.findOne({
        // making sure that the ISO code is uppercase
        isoCode: req.params.country.toUpperCase()
    }, 
    { __v: 0 }, 
    (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            Electorate.find({
                country: country._id,
                year: req.params.year
            }, { __v: 0 }, (err, electorates) => {
                send(res, err, electorates);
            }).sort({ name: 1 }).populate('country');
        }        
    });   
});

router.get('/:country/:year', (req, res) => {
    // First, find the country
    Country.findOne({
        // making sure that the ISO code is uppercase
        isoCode: req.params.country.toUpperCase()
    }, 
    { __v: 0 }, 
    (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            Electorate.find({
                country: country._id,
                year: req.params.year
            }, { __v: 0 }, (err, electorates) => {
                send(res, err, electorates);
            }).sort({ name: 1 }).populate('country');
        }
    });   
});

router.get('/:country/:year/:electionType', (req, res) => {
    // First, find the country
    Country.findOne({
        // making sure that the ISO code is uppercase
        isoCode: req.params.country.toUpperCase()
    }, 
    { __v: 0 }, 
    (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            Electorate.find({
                country: country._id,
                year: req.params.year,
                "type.election": req.params.electionType
            }, { __v: 0 }, (err, electorates) => {
                send(res, err, electorates);
            }).sort({ name: 1 }).populate('country');
        }
    });   
});