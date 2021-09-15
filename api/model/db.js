const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const url = process.env.DB_URL
const dataBaseConnection = async()=>{
    try {
        await mongoose.connect(url) 
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = dataBaseConnection
