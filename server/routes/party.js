const express = require('express');
const { requireAuth } = require('./middleware');
const { Party } = require('../database/schemas');

const router     = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    Party.find({ country: req.body.country, name: req.body.name }, { __v: 0 }, (err, party) => {
        if (err) {
            res.status(400).send({ message: 'Get party failed', err });
        } else {
            res.send({ message: 'Party retrieved successfully', party });
        }
    });
});

router.get('/all', (req, res) => {
    Party.find({}, { __v: 0 }, (err, party) => {
        if (err) {
            res.status(400).send({ message: 'Get party failed', err });
        } else {
            res.send({ message: 'Party retrieved successfully', party });
        }
    });
});

router.post('/', requireAuth, (req, res) => {
    const newParty = Party(req.body);

    newParty.save((err, savedParty) => {
        if (err) {
            res.status(400).send({ message: 'Create party failed', err });
        } else {
            res.send({ message: 'Party created successfully', party: savedParty.hide() });
        }
    });
});

router.delete('/', requireAuth, (req, res) => {
    Party.findByIdAndRemove(req.body.id, err => {
        if (err) {
            res.status(400).send({ message: 'Delete party failed', err });
        } else {
            res.send({ message: 'Party successfully delete' });
        }
    });
});
