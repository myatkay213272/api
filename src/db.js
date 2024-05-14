const mongoose = require('mongoose')

module.exports = {
    connect: DB_HOST => {
        mongoose.connect(DB_HOST)
    },
    close: ()=>{
        mongoose.connection.close();
    }
}