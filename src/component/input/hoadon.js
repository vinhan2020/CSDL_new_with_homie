import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar'
import Axios from 'axios';
import Swal from 'sweetalert2'
import dayjs from 'dayjs'
class hoadon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListHD: [],
            ListKH: [],
            ListSP: [],
            mahd: '',
            makh: '',
            mamh: '',
            soluong: '',

            mahdE: '',
            makhE: '',
            mamhE: '',
            soluongE: ''
        }
    }

    componentDidMount() {
        Axios.get('https://baitap-mongo.herokuapp.com/Api/HoaDon/GetAll')
            .then((res) => {
                const ListHD = res.data.data
                this.setState({
                    ListHD
                })
                console.log(ListHD)
            })
            .catch(err => {
                console.log(err)
            })
        Axios.get('https://baitap-mongo.herokuapp.com/Api/KhachHang/GetAll')
            .then(res => {
                const ListKH = res.data.data;
                this.setState({
                    ListKH
                })
                console.log(ListKH)
            })
        Axios.get('https://baitap-mongo.herokuapp.com/Api/MatHang/GetAll')
            .then(res => {
                const ListSP = res.data.data
                this.setState({
                    ListSP
                })
                console.log(ListSP)
            })
    }

    createHD() {
        const hd = {
            mahd: this.state.mahd,
            makh: this.state.makh,
            mamh: this.state.mamh,
            soluong: this.state.soluong
        }
        Axios.post('https://baitap-mongo.herokuapp.com/Api/HoaDon/Insert', hd)
            .then((res) => {
                if (res.data.status) {
                    Swal.fire({
                        title: res.data.message,
                        icon: 'success',
                        timer: 1000
                    })
                    document.getElementById('closeModal').click()
                }
                else {
                    Swal.fire({
                        title: res.data.message,
                        icon: 'error',
                        timer: 1000
                    })
                }
            })
            .then(() => {
                Axios.get('https://baitap-mongo.herokuapp.com/Api/HoaDon/GetAll')
                    .then((res) => {
                        const ListHD = res.data.data
                        this.setState({
                            ListHD
                        })
                        console.log(ListHD)
                    })
            })
            .then(() => {
                this.setState({
                    mahd: '',
                    makh: '',
                    mamh: '',
                    soluong: ''
                })

            })
    }


    deleteHD(id) {
        Swal.fire({
            title: "Delete this voucher ? ",
            text: "",
            icon: "question",
            showConfirmButton: true,
            showCancelButton: true
        }).then(e => {
            if (e.value) {
                Axios.post('https://baitap-mongo.herokuapp.com/Api/HoaDon/Delete', {
                    mahd: id
                })
                    .then(() => {
                        Axios.get('https://baitap-mongo.herokuapp.com/Api/HoaDon/GetAll')
                            .then((res) => {
                                const ListHD = res.data.data
                                this.setState({
                                    ListHD
                                })
                                console.log(ListHD)
                            })
                    })
            }
        })
    }

    getinforInser(hd, kh, mh, sl) {
        this.setState(
            {
                mahdE: hd,
                makhE: kh,
                mamhE: mh,
                soluongE: sl
            }
        )

    }


    updateHD() {
        const hdE = {
            mahd: this.state.mahdE,
            makh: this.state.makhE,
            mamh: this.state.mamhE,
            soluong: this.state.soluongE
        }
        Axios.post('https://baitap-mongo.herokuapp.com/Api/HoaDon/Update', hdE)
            .then((res) => {
                if (res.data.status) {
                    Swal.fire({
                        title: res.data.message,
                        icon: 'success',
                        timer: 1000
                    })
                    document.getElementById('closeModal1').click()
                }
                else {
                    Swal.fire({
                        title: res.data.message,
                        icon: 'error',
                        timer: 1000
                    })
                }
            })
            .then(() => {
                Axios.get('https://baitap-mongo.herokuapp.com/Api/HoaDon/GetAll')
                    .then((res) => {
                        const ListHD = res.data.data
                        this.setState({
                            ListHD
                        })
                        console.log(ListHD)
                    })
            })

    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className=" header_add">
                    <Link to={'/'}><button className="btn btn-info " >Back</button></Link>

                    <h1 style={{ textAlign: "center" }}>Danh Sách Hóa Đơn</h1>
                    <button type="button" className="btn btn-success " data-toggle="modal" data-target="#exampleModal">
                        +
                </button>
                </div>
                {/* btn them san pham */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">Tạo Hóa Đơn</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="mahd">Mã Hóa Đơn</label>
                                    <input value={this.state.mahd} onChange={e => { this.setState({ mahd: e.target.value }) }} type="text" className="form-control" id="mahd" placeholder="Mã Hóa Đơn" />
                                </div>
                                <label htmlFor="makh">Mã Khách Hàng</label>
                                <select value={this.state.makh} id="makh" className="form-control" onChange={e => { this.setState({ makh: e.target.value }) }}>
                                    <option>--Chọn mã khách hàng--</option>
                                    {this.state.ListKH.map((obj, i) => {
                                        return (
                                            <option key={i}>
                                                {obj.MaKH}
                                            </option>
                                        )
                                    })}
                                </select>
                                <label htmlFor="mamh">Mã Mặt Hàng</label>

                                <select value={this.state.mamh} id="mamh" className="form-control" onChange={e => { this.setState({ mamh: e.target.value }) }}>
                                    <option>--Chọn mã mặt hàng--</option>
                                    {this.state.ListSP.map((obj, i) => {
                                        return (
                                            <option key={i}>
                                                {obj.MaMH}
                                            </option>
                                        )
                                    })}
                                </select>

                                <div className="form-group">
                                    <label htmlFor="soluong">Số Lượng</label>
                                    <input value={this.state.soluong} onChange={e => { this.setState({ soluong: e.target.value }) }} type="number" className="form-control" id="soluong" placeholder="Sô Lượng" />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button id="closeModal" type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                <Link to="/hoadon">
                                    <button type="button"
                                        className="btn btn-success btn-w"
                                        onClick={() => { this.createHD() }}
                                    >Tạo
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* btn them san pham */}
                {/* hien thị danh sách */}
                <div className="container paddingTale">
                    <table className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã Hóa Đơn</th>
                                <th>Mã Khách Hàng</th>
                                <th>Mã Mặt Hàng</th>
                                <th>Số Lượng</th>
                                <th>Ngày Tạo</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.ListHD.map((obj, i) => {
                                return (
                                    <tr key={i}>
                                        <td><h6>{i + 1}</h6></td>
                                        <td>
                                            <h6>{obj.MaHD}</h6>
                                        </td>
                                        <td><h6>{obj.MaKH}</h6></td>
                                        <td><h6>{obj.MaMH}</h6></td>
                                        <td><h6>{obj.SoLuong}</h6></td>
                                        <td><h6>{dayjs(obj.CreatedDate).format("DD-MM-YYYY")}</h6></td>
                                        <td className="a">
                                            <button className="btn btn-primary mg-10"
                                                onClick={() => { this.getinforInser(obj.MaHD, obj.MaKH, obj.MaMH, obj.SoLuong) }}
                                                data-toggle="modal" data-target="#suaForm">Sửa</button>
                                            <button onClick={() => { this.deleteHD(obj.MaHD) }} className="btn btn-danger mg-10">Xóa</button></td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {/* btn sua san pham */}
                    <div className="modal fade" id="suaForm" tabIndex="-1" role="dialog" aria-labelledby="suaFormLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="suaFormLabel">Sửa thông tin hóa đơn</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="maHdSua">Mã Hóa Đơn</label>
                                        <input type="text"
                                            onChange={e => { this.setState({ mahdE: e.target.value }) }}
                                            value={this.state.mahdE}
                                            className="form-control" id="maHdSua" placeholder="Mã Hóa Đơn" disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="makhSua">Mã Khách Hàng</label>
                                        <select id="makhSua" className="form-control"
                                            onChange={e => { this.setState({ makhE: e.target.value }) }}
                                            value={this.state.makhE}>
                                            {this.state.ListKH.map((obj, i) => {
                                                return (
                                                    <option key={i}>
                                                        {obj.MaKH}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="mamhSua">Mã Mặt Hàng</label>
                                        <select id="mamhSua" className="form-control"
                                            onChange={e => { this.setState({ mamhE: e.target.value }) }}
                                            value={this.state.mamhE}>
                                            {this.state.ListSP.map((obj, i) => {
                                                return (
                                                    <option key={i}>
                                                        {obj.MaMH}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="soluongS">Số Lượng</label>
                                        <input type="text"
                                            onChange={e => { this.setState({ soluongE: e.target.value }) }}
                                            value={this.state.soluongE}
                                            className="form-control" id="soluongS" placeholder="Số Lượng" />
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button id="closeModal1" type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                    <button onClick={() => { this.updateHD() }} type="button" className="btn btn-success btn-w">Chấp Nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* btn sua san pham */}
                </div>
            </div>
        );
    }
}

export default hoadon;
