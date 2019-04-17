const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AirplaneSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
    // ,
    // registrationCode: {
    //     type: String,
    //     required: false
    // },
    // airplaneModel: {
    //     type: String,
    //     required: false
    // },
    // price: {
    //     type: Number,
    //     required: false
    // }
    
});

module.exports = Airplane = mongoose.model('airplane', AirplaneSchema);
