const mongoose = require('mongoose');
const immutablePlugin = require('mongoose-immutable');
const R = require('ramda');

const { Schema } = mongoose;

const electorateSchema = new Schema({
    name: { type: String, required: true },
    // If applicable
    code: { type: String },
    year: { type: String, required: true },
    type: {
        election: { type: String, required: true },
        // Electorate type
        electorate: { type: String, required: true },
    },    

    country: { type: Schema.Types.ObjectId, ref: 'Country' },
    
    /*founded: { 
        // Should I make these reference previous electorates by ID?
        year: { type: String },
        // The previous name(s) of the electorate (if it's split off from an electorate)
        from: [{ type: Schema.Types.ObjectId, ref: 'Electorate' }],
    }, 
    abolished: {
        year: { type: String }, 
        // The next name(s) of the electorate (if it's merged into an electorate)
        into: [{ type: Schema.Types.ObjectId, ref: 'Electorate' }],
    },//*/

    notes: { type: String },

    // Election here only refers to the candidate results
    // If this isn't present, it's assumed that there is no voting in that electorate
    totals: [
        {
            candidate: { type: String, required: true },
            party: { type: String, required: true },
            electoralVotes: { type: String },
            seats: { type: String },
            votes: { type: String },
            colour: { type: String, required: true },
        }
    ],  
});

electorateSchema.plugin(immutablePlugin);

electorateSchema.methods.hide = function () {
    return R.omit(['__v'], this.toObject());
};

const Electorate = mongoose.model('Electorate', electorateSchema);

module.exports = Electorate;