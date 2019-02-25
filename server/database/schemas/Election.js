const mongoose = require('mongoose');
const immutablePlugin = require('mongoose-immutable');
const R = require('ramda');

const { Schema } = mongoose;

const electionSchema = new Schema({
    year: { type: String, required: true },
    electionType: { type: String, required: true },
    votingSystem: { type: String, required: true },

    country: { type: Schema.Types.ObjectId, ref: 'Country' },
    map: { type: Schema.Types.ObjectId, ref: 'Map' },

    totals: [
        { 
            // Should it be a string or an object reference ID
            party: { type: String, required: true },
            seats: { type: String },
            votes: { type: String },
            colour: { type: String, required: true },
        }
    ]
});

electionSchema.plugin(immutablePlugin);

electionSchema.methods.hide = function () {
    return R.omit(['__v'], this.toObject());
};

const Election = mongoose.model('Election', electionSchema);

module.exports = Election;