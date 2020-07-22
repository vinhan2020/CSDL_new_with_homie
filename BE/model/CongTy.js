const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let CongTy = new Schema({
    MaCT: String,
    TenCT: String,
    DiaChi: String,
    SoDienThoai: String,
    GiamDoc: String
}, {
    collection: 'tbl_CongTy'
});

module.exports = mongoose.model('CongTy', CongTy);