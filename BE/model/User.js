const mongoose = require('mongoose')


var UserRoute = mongoose.Schema({
    taikhoan: String,
    matkhau: String
})

var User = mongoose.model("User", UserRoute)

module.exports = User