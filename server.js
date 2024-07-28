require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const enforce = require('express-sslify');

const authRoutes = require('./router/userRouter');
const international = require('./router/internationalRouter');
const international_Links = require('./router/inter_links_router');
const dorms = require('./router/infoDormsRouter');
const trans = require('./router/trans_router');
const news = require('./router/newsRouter');
const admission = require('./router/admission');
const contact = require('./router/contactRouter');

const app = express();

// Redirect HTTP to HTTPS
if (process.env.NODE_ENV === 'production') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/faclity', international);
app.use('/links', international_Links);
app.use('/info', dorms);
app.use('/trans', trans);
app.use('/news', news);
app.use('/admission', admission);
app.use('/contact', contact);

// Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
