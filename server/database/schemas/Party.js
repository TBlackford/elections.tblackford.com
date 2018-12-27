const R = require('ramda');
const mongoose = require('mongoose');
const immutablePlugin = require('mongoose-immutable');

const { Schema } = mongoose;

const partySchema = new Schema({
    name: { type: String },
    colour: { type: String },
    country: { type: Schema.ObjectId, ref: 'Country', required: true },
});

partySchema.plugin(immutablePlugin);

partySchema.methods.hide = function() {
    return R.omit(['__v'], this.toObject());
};

const Party = mongoose.model('Party', partySchema);

module.exports = Party;
