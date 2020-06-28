const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let KhachHang = new Schema({
    MaKH:String,
    TenKH:String,
    DiaChi:String,   
    DienThoai:String,
    CreatedDate:Date    
},{
    collection: 'tbl_KhachHang'
});

module.exports = mongoose.model('KhachHang', KhachHang);