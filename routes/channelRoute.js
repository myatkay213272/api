const express = require('express')

const {getAllChannel,getChannelById,createChannel,updateChannelById,deleteAllChannel, pageperlimit } = require('./../controllers/channelController')

const router = express.Router()
router 
    .route('/')
    .get(getAllChannel)
    .delete(deleteAllChannel)
    .post(createChannel)

router
    .route('/:id')
    .get(getChannelById)
    .patch(updateChannelById)

module.exports = router
