const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let MatHang = new Schema({
    MaMH:String,
    TenMH:String,
    MauSac:String,   
    DonGia:Number,
    MaH:String    
},{
    collection: 'tbl_MatHang'
});
module.exports = mongoose.model('MatHang', MatHang);