const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let HoaDon = new Schema({
    MaHD:String,
    MaKH:String,
    MaMH:String,   
    SoLuong:Number,
    CreatedDate:Date    
},{
    collection: 'tbl_HoaDon'
});

module.exports = mongoose.model('HoaDon', HoaDon);
