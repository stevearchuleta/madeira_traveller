//===============
// MONGODB CONNECTION
//===============

//===============
// Use mongoose dependency (see package.json) to connct to MongoDB
//===============
const mongoose = require('mongoose');

//===============
// Use config dependency (see package.json) to get the MongoDB URI
// My MongoDB URI is located inside the default.json file, which is located in a config folder; 
//===============
const config = require('config');
const db = config.get('mongoURI');

//===============
// .connect() method returns a promise, 
// so I could use .then().catch(), but the new standard seems to be .async() with await wrapped in a try-catch blocks.
//===============
const connectDB = async () => {
 try {
     await mongoose.connect(db, {
         useNewUrlParser: true,
         useUnifiedTopology: true
     });
     console.log('🍃 MongoDB Connected...');
 } catch(err) {
    console.error(err.message);
    
    //===============
    // Exit upon failure; force the application to fail if an error occurs.
    //===============
    process.exit(1);
    }
}

module.exports = connectDB;


