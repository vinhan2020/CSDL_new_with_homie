import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar'
import Axios from 'axios';
import Swal from 'sweetalert2'
import NumberFormat from 'react-number-format'

class sanpham extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListSP: [],
            ListH: [],
            mamh: '',
            tenmh: '',
            mausac: '',
            dongia: 0,
            mah: '',

            MaMHS: '',
            TenMHS: '',
            MauSacS: '',
            DonGiaS: '',
            MaHS: ''

        }
    }

    componentDidMount() {
        Axios.get('https://baitap-mongo.herokuapp.com/Api/MatHang/GetAll')
            .then(res => {
                const ListSP = res.data.data
                this.setState({
                    ListSP
                })
                console.log(ListSP)
            })
            .catch(err => {
                console.log(err)
            })


        Axios.get('https://baitap-mongo.herokuapp.com/Api/HangSanXuat/GetAll')
            .then(res => {
                const ListH = res.data.data
                this.setState({
                    ListH
                })
                console.log(ListH)
            })
            .catch(err => {
                console.log(err)
            })

    }

    createSP() {
        const sp = {
            mamh: this.state.mamh,
            tenmh: this.state.tenmh,
            mausac: this.state.mausac,
            dongia: this.state.dongia,
            mah: this.state.mah
        }

        Axios.post('https://baitap-mongo.herokuapp.com/Api/MatHang/Insert', sp)
            .then((res) => {
                if (res.data.status) {
                    Swal.fire({
                        title: "Thêm Thành Công",
                        icon: "success",
                        timer: 1000
                    })
                    document.getElementById('closeModal').click();
                }

                else {
                    Swal.fire({
                        title: res.data.message,
                        icon: "error",
                        timer: 1000
                    })
                }
            })
            .then(() => {
                Axios.get('https://baitap-mongo.herokuapp.com/Api/MatHang/GetAll')
                    .then(res => {
                        const ListSP = res.data.data
                        this.setState({
                            ListSP
                        })
                        console.log(ListSP)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .then(() => {
                this.setState({
                    mamh: '',
                    tenmh: '',
                    mausac: '',
                    dongia: 0,
                    mah: '',

                })
            })
    }

    deleteSP(id) {
        Swal.fire({
            title: "Delete this voucher ? ",
            text: "",
            icon: "question",
            showConfirmButton: true,
            showCancelButton: true
        }).then(e => {
            if (e.value) {
                Axios.post('https://baitap-mongo.herokuapp.com/Api/MatHang/Delete', {
                    mamh: id,
                })
                    .then(() => {
                        Axios.get('https://baitap-mongo.herokuapp.com/Api/MatHang/GetAll')
                            .then(res => {
                                const ListSP = res.data.data;
                                this.setState({
                                    ListSP
                                })
                                console.log(ListSP)
                            })
                    })
            }
        })

    }

    updateSP() {
        const spUp = {
            mamh: this.state.MaMHS,
            tenmh: this.state.TenMHS,
            mausac: this.state.MauSacS,
            dongia: this.state.DonGiaS,
            mah: this.state.MaHS
        }

        Axios.post('https://baitap-mongo.herokuapp.com/Api/MatHang/Update', spUp)
            .then((res) => {
                if (res.data.status) {
                    Swal.fire({
                        title: "Sửa Thành Công",
                        icon: "success",
                        timer: 1000
                    })
                    document.getElementById('closeModal1').click();
                }

                else {
                    Swal.fire({
                        title: res.data.message,
                        icon: "error",
                        timer: 1000
                    })
                }
            })
            .then(() => {
                Axios.get('https://baitap-mongo.herokuapp.com/Api/MatHang/GetAll')
                    .then(res => {
                        const ListSP = res.data.data
                        this.setState({
                            ListSP
                        })
                        console.log(ListSP)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })

    }
    getinfoInput = (ma, ten, mau, gia, mahang) => {
        this.setState({
            MaMHS: ma,
            TenMHS: ten,
            MauSacS: mau,
            DonGiaS: gia,
            MaHS: mahang
        })
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className=" header_add">
                    <Link to={'/'}><button className="btn btn-info " >Back</button></Link>

                    <h1 style={{ textAlign: "center" }}>Danh Sách Mặt Hàng</h1>
                    <button type="button" className="btn btn-success " data-toggle="modal" data-target="#exampleModal">
                        +
                </button>

                </div>
                {/* btn them san pham */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">Tạo mới Mặt Hàng</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="maSP">Mã Mặt Hàng</label>
                                    <input onChange={e => { this.setState({ mamh: e.target.value }) }}
                                        value={this.state.mamh}
                                        type="text" className="form-control" id="maSP" placeholder="Mã Mặt Hàng" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tenSP">Tên Mặt Hàng</label>
                                    <input onChange={e => { this.setState({ tenmh: e.target.value }) }}
                                        value={this.state.tenmh}
                                        type="text" className="form-control" id="tenSP" placeholder="Tên Mặt Hàng" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mausac">Màu Sắc</label>
                                    <input onChange={e => { this.setState({ mausac: e.target.value }) }}
                                        value={this.state.mausac}
                                        type="text" className="form-control" id="mausac" placeholder="Màu sắc" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dongia">Đơn Giá</label>
                                    <input onChange={e => { this.setState({ dongia: e.target.value }) }}
                                        value={this.state.dongia}
                                        type="number" className="form-control" id="dongia" placeholder="Đơn Giá" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="maH">Mã Hãng</label>
                                    <select className="form-control"
                                        value={this.state.mah} onChange={e => { this.setState({ mah: e.target.value }) }} id="maH" >
                                        <option>--Chọn một mã hãng--</option>
                                        {this.state.ListH.map((objH, i) => {
                                            return (
                                                <option
                                                    key={i}>{objH.MaH}
                                                </option>
                                            )
                                        })}
                                    </select>

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button id="closeModal" type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                <Link to="/sanpham">
                                    <button type="button"
                                        className="btn btn-success btn-w"
                                        onClick={() => { this.createSP() }}>Tạo
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* btn them san pham */}

                {/* hien thị danh sách */}
                <div className="container paddingTale">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã Mặt Hàng</th>
                                <th>Tên Mặt Hàng</th>
                                <th>Màu Sắc</th>
                                <th>Đơn Giá</th>
                                <th>Mã Hãng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.ListSP.map((obj, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            <h6>{obj.MaMH}</h6>
                                        </td>
                                        <td><h6>{obj.TenMH}</h6></td>
                                        <td>{obj.MauSac}</td>
                                        <td><NumberFormat value={obj.DonGia}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            suffix={' VND'} />
                                        </td>
                                        <td>{obj.MaH}</td>
                                        <td style={{ maxWidth: "100px" }}><button className="btn btn-primary mg-10"
                                            data-toggle="modal" data-target="#suaForm"
                                            onClick={() => { this.getinfoInput(obj.MaMH, obj.TenMH, obj.MauSac, obj.DonGia, obj.MaH) }}>Sửa</button>
                                            <button onClick={() => { this.deleteSP(obj.MaMH) }} className="btn btn-danger mg-10">Xóa</button></td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {/* btn them san pham */}
                    <div className="modal fade" id="suaForm" tabIndex="-1" role="dialog" aria-labelledby="suaFormLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="suaFormLabel">Sửa thông tin Mặt Hàng</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="maSPSua">Mã Mặt Hàng</label>
                                        <input value={this.state.MaMHS} type="text" className="form-control" id="maSPSua" placeholder="Mã Mặt Hàng" disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tenSPSua">Tên Mặt Hàng</label>
                                        <input type="text" className="form-control" id="tenSPSua"
                                            onChange={e => { this.setState({ TenMHS: e.target.value }) }}
                                            value={this.state.TenMHS}
                                            placeholder="Tên Mặt Hàng" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mausacSua">Màu Sắc</label>
                                        <input type="text" className="form-control" id="mausacSua"
                                            onChange={e => { this.setState({ MauSacS: e.target.value }) }}
                                            value={this.state.MauSacS}
                                            placeholder="Màu sắc" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dongiaSua">Đơn Giá</label>
                                        <input type="number" className="form-control" id="dongiaSua"
                                            onChange={e => { this.setState({ DonGiaS: e.target.value }) }}
                                            value={this.state.DonGiaS}
                                            placeholder="Đơn Giá" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="maHSua">Mã Hãng</label>
                                        <select className="form-control"
                                            value={this.state.MaH}
                                            onChange={e => { this.setState({ MaHS: e.target.value }) }} id="maHSua" >
                                            {this.state.ListH.map((objH, i) => {
                                                return (
                                                    <option
                                                        value={this.state.MaH}
                                                        key={i}>{objH.MaCT}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button id="closeModal1" type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                    <button onClick={() => { this.updateSP() }} type="button" className="btn btn-success btn-w">Chấp Nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* btn them san pham */}
                </div>

                {/* hien thị danh sách */}


            </div>
        );
    }
}

export default sanpham;
