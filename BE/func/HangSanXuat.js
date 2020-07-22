﻿const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const HangSanXuatRoute = express.Router();

let HangSanXuats = require('../model/HangSanXuat');
function ckstring(str) //check null empty
{
    return (!str || /^\s*$/.test(str));
}
HangSanXuatRoute.route('/Insert').post(urlencodedParser, (req, res) => {
    let MaH = req.body.mah;
    let TenHang = req.body.tenhang;
    let QuocGia = req.body.quocgia;
    let MaCT = req.body.mact;
    if (ckstring(MaH) || ckstring(TenHang) || ckstring(QuocGia) || ckstring(MaCT)) {
        res.json({ "status": false, "message": "Vui lòng nhập đầy đủ thông tin" });
        return;
    }
    HangSanXuats.findOne({ MaH: MaH }).exec((err, hsx) => {
        if (err != null) {
            res.json({ "status": false, "message": "Some thing error" });
            return;
        }
        else if (hsx != null) {
            res.json({ "status": false, "message": "Mã công ty đã được tồn tại" });
            return;

        }
        else {
            let hangsanxuat = new HangSanXuats();
            hangsanxuat.MaH = MaH;
            hangsanxuat.TenHang = TenHang;
            hangsanxuat.QuocGia = QuocGia;
            hangsanxuat.MaCT = MaCT;
            hangsanxuat.CreatedDate = Date.now();
            hangsanxuat.save().then(s => {
                res.status(200).json({ "status": true, "message": "Thành công!", "data": hangsanxuat });
            }).catch(err => {
                res.status(400).json({ "status": false, "message": err });
            });

        }
    })

});

HangSanXuatRoute.route('/GetAll').get(urlencodedParser, async function (req, res) {
    const hsx = await HangSanXuats.find();
    res.json({ "status": true, "message": "Thành công!", "data": hsx });


});
HangSanXuatRoute.route('/Update').post(urlencodedParser, async function (req, res) {
    let mahang = req.body.mah;
    let tenhang = req.body.tenhang;
    let quocgia = req.body.quocgia;
    let mact = req.body.mact;
    if (ckstring(mahang) || ckstring(tenhang) || ckstring(quocgia) || ckstring(mact)) {
        res.json({ "status": false, "message": "Vui lòng nhập đầy đủ thông tin" });
        return;
    }
    HangSanXuats.findOne({ MaH: mah }).exec((err, hsx) => {
        if (err != null) {
            res.json({ "status": false, "message": "Some thing error" });
            return;
        }
        else if (hsx == null) {
            res.json({ "status": false, "message": "Không tìm thấy hãng sản xuất" });
            return;

        }
        else {
            hsx.TenHang = tenhang;
            hsx.QuocGia = quocgia;
            hsx.MaCT = mact;
            hsx.save().then(s => {
                res.json({ "status": true, "message": "Thành công!" });
            }).catch(err => {
                res.json({ "status": false, "message": err });
            });
        }
    })
});
HangSanXuatRoute.route('/Delete').post(urlencodedParser, async function (req, res) {
    let mahang = req.body.mah;
    try {
        HangSanXuats.findOneAndDelete({ MaH: mahang }).then(s => {
            res.json({ "status": true, "message": "Thành công" });
        }).catch(err => {
            res.json({ "status": false, "message": err });
        })
    } catch (e) {
        res.json({ "status": false, "message": e });
    }
});


module.exports = HangSanXuatRoute;