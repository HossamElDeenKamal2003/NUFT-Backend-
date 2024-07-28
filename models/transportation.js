const mongoose = require('mongoose');

const secondInfoSchema = new mongoose.Schema({
    type: String,
    price: String,
    spec: String
});

const trans_Info = mongoose.model('transInfo', secondInfoSchema);

module.exports = trans_Info;
