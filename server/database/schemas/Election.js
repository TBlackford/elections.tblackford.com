const R = require('ramda');
const mongoose = require('mongoose');
const immutablePlugin = require('mongoose-immutable');

const { Schema } = mongoose;

const electionSchema = new Schema({
    electionType: { 
        type: {
            voteType: { type: String }, // MMP, FPP, etc
            layout: { type: String }, // Normal, westminster, others(?)
            name: { type: String }, // Presidential, senatorial, etc
        }
    }, 
    date: { type: Date, immutable: true },

    geoJSON: { type: String, immutable: true },

    candidates: {
        type: [{
            name: { type: String },
            image: { type: String },
            party: { type: String },
        }], immutable: true
    },

    /*
    US-Pres layout:
        {
            states: [
                { "AR": 
                    [
                        {
                            "party": "Republican",
                            "popularVote": 1234,
                            "electoralVote": 6
                        },
                    ]
                },
            ]// There must be an easier way of doing this

            states: [
                {
                    name: "Arkansas",
                    code: "AR",
                    
                }
            ]
        }

    NZ layout:
        {
            list: [
                {
                    
                }
            ],
            electorates: [
                {
                    name: "Otago",
                    ""
                }
            ]
        }
    //*/
    votes: {
        type: Schema.Types.Mixed
    },

    country: { type: Schema.ObjectId, ref: 'Country', required: true },
});

electionSchema.plugin(immutablePlugin);

electionSchema.methods.hide = function() {
    return R.omit(['__v'], this.toObject());
};

const Election = mongoose.model('Country', electionSchema);

module.exports = Election;
