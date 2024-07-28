const modelContact = require('../models/contactModel');

const addContact = async function (req, res) {
    try {
        const { name, email, phone, message } = req.body;
        const newContact = new modelContact({ name, email, phone, message });
        await newContact.save();
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
}

const getContact = async function (req, res) {
    try {
        const contacts = await modelContact.find();
        if (contacts.length === 0) {
            res.status(404).json({ message: 'No contacts found' });
        } else {
            res.status(200).json(contacts);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
}

module.exports = { addContact, getContact };
