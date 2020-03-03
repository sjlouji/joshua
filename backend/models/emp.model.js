const mongoose = require('mongoose');

var empsch = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    }
});


mongoose.model('Emp', empsch);