const mongoose = require('mongoose');

const linksSchema = mongoose.Schema({
    first_year: String,
    second_year: String,
    details_about_internationa_program: String,
    scholarship_datils: String,
    view_location: String,
    register_link_dorms: String,
    register_link_transportation: String,
    registration_link: String,
    Admission_link_egyption: String,
    Admission_link_natives: String,
    international_program_link: String,
    transfer_link: String,
    university_Name: String,
});

const linksModel = mongoose.model('links', linksSchema);

module.exports = linksModel;
