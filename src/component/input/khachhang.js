import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar'
import Axios from 'axios';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';

const initialState = {
    ListKH: [],
    TenKH: '',
    MaKH: '',
    DiaChi: '',
    DienThoai: '',

    TenEdit: '',
    MaEdit: '',
    DiaChiEdit: '',
    DienThoaiEdit: '',



}

class khachhang extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }


    componentDidMount() {
        Axios.get('https://baitap-mongo.herokuapp.com/Api/KhachHang/GetAll')
            .then(res => {
                const ListKH = res.data.data;
                this.setState({
                    ListKH
                })
                console.log(ListKH)
            })
            .catch(err => {
                console.log(err)
            })
    }




    deleteKH(id) {
        Swal.fire({
            title: "Delete this voucher ? ",
            text: "",
            icon: "question",
            showConfirmButton: true,
            showCancelButton: true
        }).then(e => {
            if (e.value) {
                Axios.post('https://baitap-mongo.herokuapp.com/Api/KhachHang/Delete', {
                    MaKH: id,
                })
                    .then(() => {
                        Axios.get('https://baitap-mongo.herokuapp.com/Api/KhachHang/GetAll')
                            .then(res => {
                                const ListKH = res.data.data;
                                this.setState({
                                    ListKH
                                })
                                console.log(ListKH)
                            })
                    })
            }
        })

    }

    updateKH() {
        const khEdit = {
            MaKH: this.state.MaEdit,
            TenKH: this.state.TenEdit,
            DiaChi: this.state.DiaChiEdit,
            DienThoai: this.state.DienThoaiEdit,
        }
        console.log(khEdit)
        Axios.post('https://baitap-mongo.herokuapp.com/Api/KhachHang/Update', khEdit)
            .then(e => {
                if (e.data.status) {
                    Swal.fire({
                        title: "Sửa Thành Công",
                        icon: "success",
                        timer: 1000
                    })
                    document.getElementById('closeModal1').click()
                }
                else {
                    Swal.fire({
                        title: "Sửa Thành Công",
                        icon: "error",
                        timer: 1000
                    })
                }
            })
            .then(() => {
                Axios.get('https://baitap-mongo.herokuapp.com/Api/KhachHang/GetAll')
                    .then(res => {
                        const ListKH = res.data.data;
                        this.setState({
                            ListKH
                        })
                        console.log(ListKH)
                    })
            })
    }



    createKH() {
        const kh = {
            TenKH: this.state.TenKH,
            MaKH: this.state.MaKH,
            DiaChi: this.state.DiaChi,
            DienThoai: this.state.DienThoai,
        }

        Axios.post('https://baitap-mongo.herokuapp.com/Api/KhachHang/Insert', kh)
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
                Axios.get('https://baitap-mongo.herokuapp.com/Api/KhachHang/GetAll')
                    .then(res => {
                        const ListKH = res.data.data;
                        this.setState({
                            ListKH
                        })
                    })
            })
            .then(() => {
                this.setState(initialState)
            })


    }

    getInfoInsert = (ma, ten, dia, dt) => {
        this.setState({
            MaEdit: ma,
            TenEdit: ten,
            DiaChiEdit: dia,
            DienThoaiEdit: dt

        })
    }





    render() {
        return (
            < div >
                <Navbar></Navbar>
                <div className="header_add">
                    <Link to={'/'}><button className="btn btn-info" >Back</button></Link>

                    <h1 style={{ textAlign: "center" }}>Danh Sách Khách Hàng</h1>
                    <button type="button" className="btn btn-success " data-toggle="modal" data-target="#exampleModal">
                        +
                </button>
                </div>
                {/* btn them san pham */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="modal-title" id="exampleModalLabel">Tạo mới khách hàng</h2>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div id="a" className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="maKH">Mã Khách Hàng</label>
                                    <input onChange={e => { this.setState({ MaKH: e.target.value }) }}
                                        value={this.state.MaKH}
                                        type="text" className="form-control" id="maKH" placeholder="Mã Khách Hàng" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tenKH">Tên Khách Hàng</label>
                                    <input onChange={e => { this.setState({ TenKH: e.target.value }) }}
                                        value={this.state.TenKH}
                                        type="text" className="form-control" id="tenKH" placeholder="Tên Khách Hàng" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="diachi">Địa Chỉ</label>
                                    <input onChange={e => { this.setState({ DiaChi: e.target.value }) }}
                                        value={this.state.DiaChi}
                                        type="text" className="form-control" id="diachi" placeholder="Địa Chỉ" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dthoai">Điện Thoại</label>
                                    <input maxLength={10} onChange={e => { this.setState({ DienThoai: e.target.value }) }}
                                        value={this.state.DienThoai}
                                        type="text" className="form-control" id="dthoai" placeholder="Điện Thoại" />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button id="closeModal" type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                <Link to="/khachhang">
                                    <button type="button" className="btn btn-success btn-w" onClick={() => { this.createKH() }}>Tạo</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* btn them san pham */}
                <div className="input-group container filter">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa..."
                        name="filterMa"
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">
                            <span className="fa fa-search mr-5"></span>Tìm
                  </button>
                    </span>
                </div>
                {/* hien thị danh sách */}
                <div className="container paddingTale">
                    <table className="table scroll table-striped table-bordered table-sm" cellSpacing="0" width="100%"  >
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã Khách Hàng</th>
                                <th>Tên Khách Hàng</th>
                                <th>Địa Chỉ</th>
                                <th>Điện Thoại</th>
                                <th>Ngày Tạo</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.loading ? (
                                <tr><td>Loading...</td></tr>
                            ) : (
                                    this.state.ListKH.map((obj, i) => {
                                        return (
                                            <tr key={i}>
                                                <td><h6>
                                                    {i + 1}
                                                </h6></td>
                                                <td>
                                                    <h6>{obj.MaKH}</h6>
                                                </td>
                                                <td><h6>{obj.TenKH}</h6></td>
                                                <td><h6>{obj.DiaChi}</h6></td>
                                                <td><h6>{obj.DienThoai}</h6></td>
                                                <td><h6>{dayjs(obj.CreatedDate).format("DD-MM-YYYY")}</h6></td>
                                                <td className="a"><button
                                                    onClick={() => { this.getInfoInsert(obj.MaKH, obj.TenKH, obj.DiaChi, obj.DienThoai) }}
                                                    className="btn btn-primary mg-10" data-toggle="modal" data-target="#suaForm">Sửa</button>
                                                    <button className="btn btn-danger mg-10" onClick={() => { this.deleteKH(obj.MaKH) }}>Xóa</button></td>
                                            </tr>
                                        )
                                    })
                                )}
                        </tbody>
                    </table>
                    {/* btn them san pham */}
                    <div className="modal fade" id="suaForm" tabIndex="-1" role="dialog" aria-labelledby="suaFormLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="modal-title" id="suaFormLabel">Sửa thông tin khách hàng</h2>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="maKHSua">Mã Khách Hàng</label>
                                        <input value={this.state.MaEdit} type="text" className="form-control" id="maKHSua" disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tenKHSua">Tên Khách Hàng</label>
                                        <input
                                            onChange={e => { this.setState({ TenEdit: e.target.value }) }}
                                            value={this.state.TenEdit} type="text" className="form-control" id="tenKHSua"
                                            placeholder="Tên Khách Hàng" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="diachiSua">Địa Chỉ</label>
                                        <input
                                            onChange={e => { this.setState({ DiaChiEdit: e.target.value }) }}
                                            value={this.state.DiaChiEdit} type="text" className="form-control" id="diachiSua"
                                            placeholder="Địa Chỉ" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dthoaiSua">Điện Thoại</label>
                                        <input
                                            onChange={e => { this.setState({ DienThoaiEdit: e.target.value }) }}
                                            value={this.state.DienThoaiEdit} type="text" className="form-control" id="dthoaiSua"
                                            placeholder="Điện Thoại" />
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button id="closeModal1" type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                    <button type="button" className="btn btn-success btn-w" onClick={() => { this.updateKH() }}>Chấp Nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* btn them san pham */}
                </div>
                {/* hien thị danh sách */}


            </div >
        );
    }
}

export default khachhang;
