const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const CongTyRoute = express.Router();

let CongTys = require('../model/CongTy');
function ckstring(str) //check null empty
{
    return (!str || /^\s*$/.test(str));
}
CongTyRoute.route('/Insert').post(urlencodedParser, (req, res) => {
    let mact = req.body.mact;
    let tenct = req.body.tenct;
    let diachi = req.body.diachi;
    let sdt = req.body.sdt;
    let giamdoc = req.body.giamdoc;
    if (ckstring(mact) || ckstring(tenct) || ckstring(diachi) || ckstring(sdt) || ckstring(giamdoc)) {
        res.json({ "status": false, "message": "Vui lòng nhập đầy đủ thông tin" });
        return;
    }
    CongTys.findOne({ MaCT: mact }).exec((err, cty) => {
        if (err != null) {
            res.json({ "status": false, "message": "Some thing error" });
            return;
        }
        else if (cty != null) {
            res.json({ "status": false, "message": "Mã công ty đã được tồn tại" });
            return;

        }
        else {
            let CongTy = new CongTys();
            CongTy.MaCT = mact;
            CongTy.TenCT = tenct;
            CongTy.DiaChi = diachi;
            CongTy.SoDienThoai = sdt;
            CongTy.GiamDoc = giamdoc;
            CongTy.save().then(s => {
                res.status(200).json({ "status": true, "message": "Thành công!", "data": CongTy });
            }).catch(err => {
                res.status(400).json({ "status": false, "message": err });
            });

        }
    })

});

CongTyRoute.route('/GetAll').get(urlencodedParser, async function (req, res) {
    const cty = await CongTys.find();
    res.json({ "status": true, "message": "Thành công!", "data": cty });


});
CongTyRoute.route('/Update').post(urlencodedParser, async function (req, res) {
    let mact = req.body.mact;
    let tenct = req.body.tenct;
    let diachi = req.body.diachi;
    let sdt = req.body.sdt;
    let giamdoc = req.body.giamdoc;
    if (ckstring(mact) || ckstring(tenct) || ckstring(diachi) || ckstring(sdt) || ckstring(giamdoc)) {
        res.json({ "status": false, "message": "Vui lòng nhập đầy đủ thông tin" });
        return;
    }
    CongTys.findOne({ MaCT: mact }).exec((err, cty) => {
        if (err != null) {
            res.json({ "status": false, "message": "Some thing error" });
            return;
        }
        else if (cty == null) {
            res.json({ "status": false, "message": "Không tìm thấy công ty" });
            return;

        }
        else {
            cty.TenCT = tenct;
            cty.DiaChi = diachi;
            cty.SoDienThoai = sdt;
            cty.GiamDoc = giamdoc;
            cty.save().then(s => {
                res.json({ "status": true, "message": "Thành công!" });
            }).catch(err => {
                res.json({ "status": false, "message": err });
            });
        }
    })
});
CongTyRoute.route('/Delete').post(urlencodedParser, async function (req, res) {
    let macty = req.body.mact;
    try {
        CongTys.findOneAndDelete({ MaCT: macty }).then(s => {
            res.json({ "status": true, "message": "Thành công" });
        }).catch(err => {
            res.json({ "status": false, "message": err });
        })
    } catch (e) {
        res.json({ "status": false, "message": e });
    }
});


module.exports = CongTyRoute;