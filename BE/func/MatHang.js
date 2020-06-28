const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const MatHangRoute = express.Router();
// MaMH:String,
// TenMH:String,
// MauSac:String,   
// DonGia:Number,
// MaH:String    
let MatHangs= require('../model/MatHang');
function ckstring(str) //check null empty
{
    return (!str || /^\s*$/.test(str));
}
MatHangRoute.route('/Insert').post(urlencodedParser,(req,res)=>{
    let MaMH = req.body.mamh;
    let TenMH = req.body.tenmh;
    let MauSac  = req.body.mausac;
    let DonGia = req.body.dongia;
    let MaH = req.body.mah;
    if(ckstring(MaMH) || ckstring(TenMH) || ckstring(MauSac)|| ckstring(DonGia) || ckstring(MaH)){
        res.json({"status":false,"message":"Vui lòng nhập đầy đủ thông tin"});
        return;
    }
    MatHangs.findOne({MaMH:MaMH}).exec((err,mh)=>{
        if(err!=null)
        {
            res.json({"status":false,"message":"Some thing error"});
            return;
        }  
        else if(mh!=null){
            res.json({"status":false,"message":"Mã mặt hàng đã tồn tại"});
            return;      
        }
        else{                    
            let mathang =new MatHangs();
            mathang.MaMH = MaMH;
            mathang.TenMH = TenMH;
            mathang.MauSac = MauSac;
            mathang.DonGia = DonGia;
            mathang.MaH = MaH;
            mathang.save().then(s=>{
                res.status(200).json({"status":true,"message":"Thành công!","data":mathang});
            }).catch(err=>{
                res.status(400).json({"status":false,"message":err});
            });  
           
        }         
    })

});

MatHangRoute.route('/GetAll').get(urlencodedParser,async function(req,res){
    const mh = await MatHangs.find();
    res.json({"status":true,"message":"Thành công!","data":mh});

});
MatHangRoute.route('/Update').post(urlencodedParser,async function(req,res){
    let mamh = req.body.mamh;
    let tenmh = req.body.tenmh;
    let mausac =req.body.mausac;
    let dongia = req.body.dongia;
    let mah = req.body.mah;
    if(ckstring(MaMH) || ckstring(TenMH) || ckstring(MauSac)|| ckstring(DonGia) || ckstring(MaH)){
        res.json({"status":false,"message":"Vui lòng nhập đầy đủ thông tin"});
        return;
    }
    MatHangs.findOne({MaMH:mamh}).exec((err,mh)=>{
        if(err!=null)
        {
            res.json({"status":false,"message":"Some thing error"});
            return;
        }  
        else if(mh ==null){
            res.json({"status":false,"message":"Không tìm thấy mặt hàng"});
            return;      
           
        }
        else{                    
            mh.TenMH = tenmh;
            mh.MauSac = mausac;
            mh.DonGia = dongia;
            mh.MaH = mah;
            mh.save().then(s=>{
                res.json({"status":true,"message":"Thành công!"});
            }).catch(err=>{
                res.json({"status":false,"message":err});
            });            
        }         
    })
});
MatHangRoute.route('/Delete').post(urlencodedParser,async function(req,res){
    let mamh = req.body.mamh;
    try {
        MatHangs.findOneAndDelete({MaMH:mamh}).then(s=>{
            res.json({"status":true,"message":"Thành công"});
        }).catch(err=>{
                res.json({"status":false,"message":err});
        })
     } catch (e) {
        res.json({"status":false,"message":e});
     }
});


module.exports = MatHangRoute;