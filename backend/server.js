const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

const auth = require('./routes/auth');
const employee = require('./routes/employee');
const feedback = require('./routes/feedback');
const analytics = require('./routes/analytics');
const manager = require('./routes/manager');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', auth );
app.use('/api/employee', employee );
app.use('/api/feedback', feedback );
app.use('/api/analytics', analytics );
app.use('/api/manager', manager );