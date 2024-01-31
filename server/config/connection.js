const mongoose = require('mongoose');

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Set the timeout value in milliseconds (e.g., 30 seconds)
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://73.63.181.82:27017/BlazeDisplayz');

module.exports = mongoose.connection;
