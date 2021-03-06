const R = require('ramda');
const mongoose = require('mongoose');
const immutablePlugin = require('mongoose-immutable');

const { Schema } = mongoose;

const countrySchema = new Schema({
    name: { type: String },
    isoCode: { type: String },
    continent: { type: String },
    flagUrl: { type: String },

    // You're on your own, kiddo
    elections: {},
});

countrySchema.plugin(immutablePlugin);

countrySchema.methods.hide = function() {
    return R.omit(['__v'], this.toObject());
};

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
