// require express
const express = require ('express')

//instance of express
const app = express()

//Require dotenv and configure
require('dotenv').config()

// connect to DB
const connectDB = require('./config/connectDB')
connectDB()

//middleware
app.use(express.json())

//route

app.use('/api/annonces',require('./routes/annonce'));
app.use('/api/user',require('./routes/user'))


//port 
const PORT = process.env.PORT 


//create server 
app.listen(PORT, error =>
    error? console.error(error)
    :
    console.log(`Server is running on port ${PORT}`)
    )