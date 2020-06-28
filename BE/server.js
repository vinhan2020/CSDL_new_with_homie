const express = require('express');
var port = process.env.PORT || 3200;
var app = express();
const bodyParser=require('body-parser');
const config = require('./DB');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json()
const mongoose = require('mongoose');
const cors= require('cors');


app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(jsonParser);

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true,useUnifiedTopology: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const mathang =require('./func/MatHang')
app.use('/API/MatHang',mathang);

const congty =require('./func/CongTy')
app.use('/API/CongTy',congty);

const hangsanxuat =require('./func/HangSanXuat')
app.use('/API/HangSanXuat',hangsanxuat);

const khachhang =require('./func/KhachHang')
app.use('/API/KhachHang',khachhang);

const hoadon =require('./func/HoaDon')
app.use('/API/HoaDon',hoadon);

app.listen(port, function () {
    console.log(`Example app listening on port !`);
});