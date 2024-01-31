const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://73.63.181.82:27017/BlazeDisplayz');

module.exports = mongoose.connection;
