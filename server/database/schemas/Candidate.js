const R = require('ramda');
const mongoose = require('mongoose');
const immutablePlugin = require('mongoose-immutable');

const { Schema } = mongoose;

const candidateSchema = new Schema({
    name: {
        first: { type: String },
        middle: { type: String },
        last: { type: String }
    },
    
    party: { type: Schema.ObjectId, ref: 'Party', required: true },
});

candidateSchema.plugin(immutablePlugin);

candidateSchema.methods.hide = function () {
    return R.omit(['__v'], this.toObject());
};

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
