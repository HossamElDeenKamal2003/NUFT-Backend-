const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
});

const modelContact = mongoose.model('contact', contactSchema);
module.exports = modelContact;
