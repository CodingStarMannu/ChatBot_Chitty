// Importing the mongoose library for MongoDB connection
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

// Connecting to the MongoDB database using the provided connection string
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb+srv://manojpant097:bambambhole123@cluster0.oevgklo.mongodb.net/?retryWrites=true&w=majority');

// Getting the default connection
const db = mongoose.connection;

// Event listener for connection errors
db.on('error', console.error.bind(console, 'Error connecting to the database'));

// Event listener for successful database connection
db.once('open', () => {
    console.log("Successfully connected to the Database");
});

// Exporting the database connection for use in other files
export default db;
