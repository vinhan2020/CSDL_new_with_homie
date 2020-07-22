const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const HoaDonRoute = express.Router();

// MaHD:String,
// MaKH:String,
// MaMH:String,   
// SoLuong:Number,
// CreatedDate:Date    
let HoaDons = require('../model/HoaDon');
function ckstring(str) //check null empty
{
    return (!str || /^\s*$/.test(str));
}
HoaDonRoute.route('/Insert').post(urlencodedParser, (req, res) => {
    let MaHD = req.body.mahd;
    let MaKH = req.body.makh;
    let MaMH = req.body.mamh;
    let SoLuong = req.body.soluong;

    if (ckstring(MaHD) || ckstring(MaKH) || ckstring(MaMH) || ckstring(SoLuong)) {
        res.json({ "status": false, "message": "Vui lòng nhập đầy đủ thông tin" });
        return;
    }
    HoaDons.findOne({ MaHD: MaHD }).exec((err, hd) => {
        if (err != null) {
            res.json({ "status": false, "message": "Some thing error" });
            return;
        }
        else if (hd != null) {
            res.json({ "status": false, "message": "hóa đơn đã tồn tại" });
            return;

        }
        else {
            let HoaDon = new HoaDons();
            HoaDon.MaHD = MaHD;
            HoaDon.MaKH = MaKH;
            HoaDon.TenKH = TenKH;
            HoaDon.MaMH = MaMH;
            HoaDon.SoLuong = SoLuong;
            HoaDon.CreatedDate = Date.now();
            HoaDon.save().then(s => {
                res.status(200).json({ "status": true, "message": "Thành công!", "data": HoaDon });
            }).catch(err => {
                res.status(400).json({ "status": false, "message": err });
            });

        }
    })

});

HoaDonRoute.route('/GetAll').get(urlencodedParser, async function (req, res) {
    const hd = await HoaDons.find();
    res.json({ "status": true, "message": "Thành công!", "data": hd });
});
HoaDonRoute.route('/Update').post(urlencodedParser, async function (req, res) {
    let mahd = req.body.mahd;
    let makh = req.body.makh;
    let mamh = req.body.mamh;
    let soluong = req.body.soluong;
    if (ckstring(mahd) || ckstring(makh) || ckstring(mamh) || ckstring(soluong)) {
        res.json({ "status": false, "message": "Vui lòng nhập đầy đủ thông tin" });
        return;
    }
    HoaDons.findOne({ MaHD: mahd }).exec((err, hd) => {
        if (err != null) {
            res.json({ "status": false, "message": "Some thing error" });
            return;
        }
        else if (hd == null) {
            res.json({ "status": false, "message": "Không tìm thấy hóa đơn" });
            return;
        }
        else {
            hd.MaKH = makh;
            hd.MaMH = mamh;
            hd.SoLuong = soluong;
            hd.save().then(s => {
                res.json({ "status": true, "message": "Thành công!" });
            }).catch(err => {
                res.json({ "status": false, "message": err });
            });
        }
    })
});
HoaDonRoute.route('/Delete').post(urlencodedParser, async function (req, res) {
    let hd = req.body.mahd;
    try {
        HoaDons.findOneAndDelete({ MaHD: hd }).then(s => {
            res.json({ "status": true, "message": "Thành công" });
        }).catch(err => {
            res.json({ "status": false, "message": err });
        })
    } catch (e) {
        res.json({ "status": false, "message": e });
    }
});


module.exports = HoaDonRoute;