const mongoose = require('mongoose')

const Animal = mongoose.model('Animal', {
    breed:String,
    size:Number,
    cub:Boolean
})

module.exports = Animal