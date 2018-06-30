# Cab-Locate
Service to get the nearest cab information

# Service access (UI is unavailable use postman)
#Add - localhost:Port/api/cars - use below schema info

# create geolocation Schema
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

# create ninja Schema & model
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

#Update: localhost:Port/api/cars/:id - (id - ObjectID of mongoDB)
#Delete: localhost:Port/api/cars/:id
#GET: localhost:Port/api/cars
