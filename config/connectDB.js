//require mongoose
const mongoose = require('mongoose')

// connection to DB
const connectDB = async () => {
    try {
       await mongoose.connect(process.env.DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) 
    console.log(`Database is connected `)
    } catch (error) {
       console.error(`Connexion failed ${error}`) 
    }
   
}

module.exports = connectDB