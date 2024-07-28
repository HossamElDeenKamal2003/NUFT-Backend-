const newsModel = require('../models/newsModel');

const addNews = async function(req, res) {
    try {
        const { text } = req.body;
        const newText = new newsModel({
            text,
        });
        await newText.save();
        res.status(200).json({ message: 'news sent successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
};

const getNews = async function(req, res) {
    try {
        const response = await newsModel.find();
        if (response.length === 0) {
            return res.status(404).json({ message: 'NO DATA' });
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
    }
};


module.exports = {addNews, getNews};