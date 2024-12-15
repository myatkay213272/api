const mongoose = require('mongoose')

const channelSchema = mongoose.Schema({

    cname :{
        type:String,
        required :[true,'cname is missing']
    },
    subscribers :{
        type:String,
        required :[true,'subscribers are missing']
    },
    videos :{
        type:Number,
        required :[true,'videos are missing']
    },
    description :{
        type:String,
        required :[true,'description is missing']
    },
    gmail:{
        type:String,
        required :[true,'description is missing']
    }

})


const Channel = mongoose.model('Channel',channelSchema)

module.exports = Channel