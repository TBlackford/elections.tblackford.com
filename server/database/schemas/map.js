const mongoose = require('mongoose');
const immutablePlugin = require('mongoose-immutable');
const R = require('ramda');

const { Schema } = mongoose;
const {
    Point,
    LineString,
    Polygon,
    MultiPoint,
    MultiLineString,
    MultiPolygon,
    Geometry,
    GeometryCollection 
} = require('mongoose-geojson-schemas');

const mapSchema = new Schema({
    // This needs to facilitate both GeoJSON and SVG formats
    //SVG Portion

    // GeoJSON Portion
    isoCode: String,
    year: String,
    electionType: String,
    geojson: {}
});

mapSchema.plugin(immutablePlugin);

mapSchema.methods.hide = function () {
    return R.omit(['__v'], this.toObject());
};

const MapModel = mongoose.model('Map', mapSchema);

module.exports = MapModel;