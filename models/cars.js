const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

// create ninja Schema & model
const CarSchema = new Schema({
    uniqueNo: {
        type: String,
        required: [true, 'Unique No field is required']
    },
    companyDetails: {
      name: {
        type: String
      },
      color: {
        type: String
      }    
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Cars = mongoose.model('cars', CarSchema);

module.exports = Cars;
