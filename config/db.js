const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// MongoDB Database Connection Function
const connectDB = async () => {
    try {
        // Await connection promise
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('MongooDB Connected...');
    } catch(err) {
        // Print error
        console.error(err.message);
        // Exit process with failure
        process.exit(1)
    }
}


module.exports = connectDB;