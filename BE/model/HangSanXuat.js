const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let HangSanXuat = new Schema({
    MaH:String,
    TenHang:String,
    QuocGia:String,   
    MaCT:String,
    CreatedDate:Date    
},{
    collection: 'tbl_HangSanXuat'
});

module.exports = mongoose.model('HangSanXuat', HangSanXuat);