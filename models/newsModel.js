const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    text: String,
});

const newsModel = mongoose.model('news', newsSchema);

module.exports = newsModel;
