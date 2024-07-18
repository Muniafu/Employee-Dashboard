const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect('mongodb://localhost:27017/employee-database', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Define routes
app.use('api/auth', require('./routes/auth'))
app.use('/api/employees', require('./routes/employees'));
app.use('/api/managers', require('./routes/managers'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Export the app