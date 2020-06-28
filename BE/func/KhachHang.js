const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const KhachHangRoute = express.Router();

let KhachHangs= require('../model/KhachHang');
function ckstring(str) //check null empty
{
    return (!str || /^\s*$/.test(str));
}
KhachHangRoute.route('/Insert').post(urlencodedParser,(req,res)=>{
    let MaKH = req.body.MaKH;
    let TenKH = req.body.TenKH;
    let DiaChi  = req.body.DiaChi;
    let DienThoai = req.body.DienThoai;
    if(ckstring(MaKH) || ckstring(TenKH) || ckstring(DiaChi)|| ckstring(DienThoai)){
        res.json({"status":false,"message":"Vui lòng nhập đầy đủ thông tin"});
        return;
    }
    KhachHangs.findOne({MaKH:MaKH}).exec((err,kh)=>{
        if(err!=null)
        {
            res.json({"status":false,"message":"Some thing error"});
            return;
        }  
        else if(kh!=null){
            res.json({"status":false,"message":"Mã công ty đã được tồn tại"});
            return;      
           
        }
        else{                    
            let khachhang =new KhachHangs();
            khachhang.MaKH = MaKH;
            khachhang.TenKH = TenKH;
            khachhang.DiaChi = DiaChi;
            khachhang.DienThoai = DienThoai;
            khachhang.CreatedDate =Date.now();
            khachhang.save().then(s=>{
                res.status(200).json({"status":true,"message":"Thành công!","data":khachhang});
            }).catch(err=>{
                res.status(400).json({"status":false,"message":err});
            });  
           
        }         
    })

});

KhachHangRoute.route('/GetAll').get(urlencodedParser,async function(req,res){
    const kh = await KhachHangs.find();
    res.json({"status":true,"message":"Thành công!","data":kh});


});
KhachHangRoute.route('/Update').post(urlencodedParser,async function(req,res){
    let MaKH = req.body.MaKH;
    let TenKH = req.body.TenKH;
    let DiaChi =req.body.DiaChi;
    let DienThoai = req.body.DienThoai;
    if(ckstring(MaKH) || ckstring(TenKH) || ckstring(DiaChi)|| ckstring(DienThoai)){
        res.json({"status":false,"message":"Vui lòng nhập đầy đủ thông tin"});
        return;
    }
    KhachHangs.findOne({MaKH:MaKH}).exec((err,kh)=>{
        if(err!=null)
        {
            res.json({"status":false,"message":"Some thing error"});
            return;
        }  
        else if(kh ==null){
            res.json({"status":false,"message":"Không tìm thấy khách hàng"});
            return;      
           
        }
        else{                    
            kh.TenKH = TenKH;
            kh.DiaChi = DiaChi;
            kh.DienThoai = DienThoai;
            kh.save().then(s=>{
                res.json({"status":true,"message":"Thành công!"});
            }).catch(err=>{
                res.json({"status":false,"message":err});
            });            
        }         
    })
});
KhachHangRoute.route('/Delete').post(urlencodedParser,async function(req,res){
    let MaKH = req.body.MaKH;
    let kh  = await KhachHangs.findOne({MaKH:MaKH})    
    if(kh == null){
        res.json({"status":false,"message":"Không thành công"});
    }else{
        try {

            KhachHangs.findOneAndDelete({MaKH:MaKH}).then(s=>{
                res.json({"status":true,"message":"Thành công"});
            }).catch(err=>{
                    res.json({"status":false,"message":err});
            })
         } catch (e) {
            res.json({"status":false,"message":e});
         }
    }
  
});

module.exports = KhachHangRoute;