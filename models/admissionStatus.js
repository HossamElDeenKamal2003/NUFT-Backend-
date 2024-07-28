const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    faclityName: String,
    specility: String,
    statusTransfer: String,
    thanwyaaAmaaStatus_first: String,
    thanwyaaAmaaStatus_second: String,
    ArabEnglishAzhariCertificates_first: String,
    ArabEnglishAzhariCertificates_second: String,
    StemNileCertificates_first: String,
    StemNileCertificates_second: String,
    InternationalStudents: String,
});

const admission = mongoose.model('admission', admissionSchema);
module.exports = admission;
