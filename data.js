const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mkztdb')

Channel.create([
    {
        cname :'Learn English',
        subscribers:'474k',
        videos : 165,
        description : 'Learn English Podcast',
        gmail:'led@gmail.com'
    }
])