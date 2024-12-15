const dotenv = require('dotenv')

dotenv.config(`${__dirname}/config.env`)

const DB = process.env.DB
const PORT = process.env.PORT

const mongoose = require('mongoose')
const app = require('./app')


mongoose.connect(DB)
.then(con=>console.log('dbconnected'))

app.listen(PORT,()=>{
    console.log('listen...')
})