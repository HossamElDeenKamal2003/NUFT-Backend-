const { International } = require('../models/internationalModel');
const addInternationalFacility = async function(req, res) {
    try {
        const {
            facilities,
            facality_or_international,
            
            programs,
            feesEgyption,
            feesNatives,
            section,
            firstYearThanwyaa,
            scoreFirst,
            secondYearThanwyaa,
            scoreSecond,
            firstYearAzhar,
            scorefirstAzhar,
            secondYearAzhar,
            scoreYearsecondAzhar,
            firstYearStem,
            scorefirstStem,
            secondYearStem,
            scoreYearsecondStem,
            minimumForNatives,
            speciality,
            DormsInfo,
            detailsSchoolarship,
            //transfer_link,
            //details_about_internationa_program,
        } = req.body;

        const newFacility = new International({
            facilities,
            facality_or_international,
            programs,
            feesEgyption,
            feesNatives,
            section,
            firstYearThanwyaa,
            scoreFirst,
            secondYearThanwyaa,
            scoreSecond,
            firstYearAzhar,
            scorefirstAzhar,
            secondYearAzhar,
            scoreYearsecondAzhar,
            firstYearStem,
            scorefirstStem,
            secondYearStem,
            scoreYearsecondStem,
            minimumForNatives,
            speciality,
            DormsInfo,
            detailsSchoolarship,
        });

        await newFacility.save();
        res.status(200).json({ message: 'Facility added successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error when adding facility' });
    }
};

const deleteFacility = async function(req, res) {
    try {
        const { name } = req.params;
        const result = await International.deleteOne({ facilities: name });
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Facility deleted successfully' });
        } else {
            res.status(404).json({ message: 'Facility not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error when deleting facility' });
    }
};

const getAllfacilities = async function(req,res){
    try{
        const facilities = await International.find();
        if(facilities.length === 0){
            res.status(404).json({message:'no data'});
        }
        res.status(200).json({facilities});
    }
    catch(error){
        console.log(error);
    }
};



module.exports = { addInternationalFacility, deleteFacility, getAllfacilities, };
