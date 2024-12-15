const express = require('express')

const channelRoute = require('./routes/channelRoute')


const app = express()

app.use(express.json())

app.use('/api/channels',channelRoute)


module.exports = app