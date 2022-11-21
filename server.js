const app = require('./app');
const mongoose = require('mongoose');
const mongodb = require('mongodb');

// MongoDB connection
const dbURI = 'mongodb+srv://NAME:PASSWORD...';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

//Server port
const port = 5500;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

