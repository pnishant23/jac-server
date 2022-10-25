require('dotenv').config();

const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const routes = require('./routes/routes')

// const mongoString = process.env.DATABASE_URL
const PORT = process.env.PORT || 3001

// mongoose.connect(mongoString);
// const database = mongoose.connection

// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })

const app = express();
app.use(express.json())

app.use(cors())
app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
    // res.send('hello server is running')
})