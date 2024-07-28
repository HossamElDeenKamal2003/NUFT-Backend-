const mongoose = require('mongoose');

const secondInfoSchema = new mongoose.Schema({
    type: String,
    price: String,
    spec: String
});

const secondInfo = mongoose.model('secondInfo', secondInfoSchema);

module.exports = secondInfo;
