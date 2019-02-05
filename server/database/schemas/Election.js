const R = require('ramda');
const mongoose = require('mongoose');
const immutablePlugin = require('mongoose-immutable');

const { Schema } = mongoose;

// This needs to have the votes... maybe?

const electionSchema = new Schema({
    name: { type: String },
    year: { type: Number },
    country: { type: Schema.ObjectId, ref: 'Country', required: true },
    geoJSON: { type: String },

    candidates: { type: [Schema.Types.Mixed] }, // idk
});

electionSchema.plugin(immutablePlugin);

electionSchema.methods.hide = function () {
    return R.omit(['__v'], this.toObject());
};

const Election = mongoose.model('Election', electionSchema);

module.exports = Election;
