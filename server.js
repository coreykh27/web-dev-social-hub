const express = require('express'); 

// Connect MongoDB 
const connectDB = require('./config/db')
connectDB();

// Setup Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));

// Start Express API
app.get('/', (req, res) => res.send('API Running'));

// Start Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))