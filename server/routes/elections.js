const express = require('express');
const { requireAuth } = require('./middleware');
const { Country, Election } = require('../database/schemas');
const R = require('ramda');

const router     = express.Router();

module.exports = router;

////////////////////////////////////////////////////////////
// Helper route functions

const groupByElections = (elections) => {
    var previousYear = elections[0].year;
    var newElections = {};
    
    for(var i in elections) {
        if(previousYear != elections[i].year) {
            previousYear = elections[i].year;
        }

        if(!newElections[previousYear]) {
            newElections[previousYear] = [];
        }      
        
        newElections[previousYear].push(elections[i]);
        newElections[previousYear].sort();
    }

    elections = [];
    for(var i in newElections) {
        elections.push(newElections[i]);
    }

    elections.sort().reverse();

    return elections;
}

const groupBy = (group, elections) => {
    switch(group) {
        case "year":
            return groupByElections(elections);
        default:
            return elections;
    }
}

const send = (res, err, elections) => {
    if (err) {
        res.status(400).send({ message: 'Get election failed', err });
    } else {
        if(elections) {
            if(elections.length == 0) {
                res.send({ message: 'No elections found' });
            } else {
                res.send({ message: 'Elections retrieved successfully', elections });
            }
        }
    }
}

////////////////////////////////////////////////////////////
// Adding to the db

router.get('/', (req, res) => {
    Election.find({}, { __v: 0 }, (err, elections) => {
        send(res, err, elections);
    }).sort({ name: -1 });
});

router.get('/:country/allyears', (req, res) => {
    const isoCode = req.params.country.toUpperCase();
    Election.aggregate([
        { "$project" : {
            _id: 1,
            year: 1,
            country: 1
        }},
        {"$lookup": {
            from: "countries",
            localField: "country",
            foreignField: "_id",
            as: "country"
        }},
        { "$match": {
            "country.isoCode": isoCode
        }},
        { "$sort" : {
            year: 1
        }}
    ], (err, elections) => {
        const toReturn = [];
        elections.map(election => {
            toReturn.push({
                _id: election._id,
                year: election.year,
            });
        });
        
        send(res, err, toReturn);
    })
});

router.get('/:country', (req, res) => {
    // First, find the country
    Country.findOne({
        // making sure that the ISO code is uppercase
        isoCode: req.params.country.toUpperCase()
    }, { __v: 0 }, (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            Election.find({
                country: country._id
            }, { _id: 0, __v: 0 }, (err, elections) => {
                // Check for queries
                if(req.query.groupby) {
                    // The group by query
                    elections = groupBy(req.query.groupby, elections);
                }

                // Send the data
                send(res, err, elections);
            }).populate('country');   
        }
    });    
});

const electionGetCountryYear = (req, res) => {
    // First, find the country
    Country.findOne({
        // making sure that the ISO code is uppercase
        isoCode: req.params.country.toUpperCase() 
    }, { __v: 0 }, (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {            
            // Find the election with the found country ID
            Election.find({
                country: country._id,
                year: req.params.year
            }, { _id: 0, __v: 0 }, (err, elections) => {
                // Send the data
                send(res, err, elections);
            }).populate('country').sort({year: 1, votingSystem: 1});   
        }
    }); 
}

// Annoyingly, the regex doesn't work for some reason
router.get('/:country/:year([0-9]{4}(-[0-9]{2}))', (req, res) => {
    electionGetCountryYear(req, res);
});

router.get('/:country/:year([0-9]{4})', (req, res) => {
    electionGetCountryYear(req, res);   
});

router.get('/:country/:election', (req, res) => {
    // First, find the country
    Country.findOne({
        // making sure that the ISO code is uppercase
        isoCode: req.params.country.toUpperCase() 
    }, { __v: 0 }, (err, country) => {
        Election.find({
            country: country._id,
            electionType: req.params.election
        }, { _id: 0, __v: 0 }, (err, elections) => {
            // Send the data
            send(res, err, elections);
        }).populate('country').sort({year: 1});  
    });
});

router.get('/:country/:year/:election', (req, res) => {
    Country.findOne({ isoCode: req.params.country.toUpperCase() }, { __v: 0 }, (err, country) => {
        if (err) {
            res.status(400).send({ message: 'Get country failed', err });
        } else {
            Election.findOne({
                country: country._id,
                year: req.params.year,
                electionType: req.params.election.split("_").join(" ")
            }, { _id: 0, __v: 0 }, (err, elections) => {
                send(res, err, elections);
            }).populate('country').sort({year: -1, votingSystem: 1});   
        }
    });    
});