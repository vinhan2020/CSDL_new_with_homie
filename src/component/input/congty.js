import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar'
import Axios from 'axios'
import Swal from 'sweetalert2';

class congty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ListCTY: [],
            mact: '',
            tenct: '',
            diachi: '',
            sdt: '',
            giamdoc: '',

            mactEdit: '',
            tenctEdit: '',
            diachiEdit: '',
            sdtEdit: '',
            giamdocEdit: ''
        }
    }


    componentDidMount() {
        Axios.get("https://baitap-mongo.herokuapp.com/Api/CongTy/GetAll")
            .then((res) => {
                const ListCTY = res.data.data
                this.setState({
                    ListCTY
                })
                console.log(ListCTY)

            })
    }


    createCTY() {
        const cty = {
            mact: this.state.mact,
            tenct: this.state.tenct,
            diachi: this.state.diachi,
            sdt: this.state.sdt,
            giamdoc: this.state.giamdoc
        }
        Axios.post("https://baitap-mongo.herokuapp.com/Api/CongTy/Insert", cty)
            .then((res) => {
                if (res.data.status) {
                    Swal.fire({
                        title: res.data.message,
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
                Axios.get("https://baitap-mongo.herokuapp.com/Api/CongTy/GetAll")
                    .then((res) => {
                        const ListCTY = res.data.data
                        this.setState({
                            ListCTY
                        })
                        console.log(ListCTY)

                    })
            })
            .then(() => {
                this.setState({
                    mact: '',
                    tenct: '',
                    diachi: '',
                    sdt: '',
                    giamdoc: ''
                })
            })
    }
    deleteCTY(id) {
        Swal.fire({
            title: "Delete this voucher ? ",
            text: "",
            icon: "question",
            showConfirmButton: true,
            showCancelButton: true
        })
            .then(e => {
                if (e.value) {
                    Axios.post('https://baitap-mongo.herokuapp.com/Api/CongTy/Delete', {
                        mact: id
                    })
                        .then(() => {
                            Axios.get("https://baitap-mongo.herokuapp.com/Api/CongTy/GetAll")
                                .then((res) => {
                                    const ListCTY = res.data.data
                                    this.setState({
                                        ListCTY
                                    })
                                    console.log(ListCTY)

                                })
                        })
                }
            })
    }

    updateCTY() {
        const ctyEdit = {
            mact: this.state.mactEdit,
            tenct: this.state.tenctEdit,
            diachi: this.state.diachiEdit,
            sdt: this.state.sdtEdit,
            giamdoc: this.state.giamdocEdit
        }
        Axios.post('https://baitap-mongo.herokuapp.com/Api/CongTy/Update', ctyEdit)
            .then((res) => {
                if (res.data.status) {
                    Swal.fire({
                        title: res.data.message,
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
                Axios.get("https://baitap-mongo.herokuapp.com/Api/CongTy/GetAll")
                    .then((res) => {
                        const ListCTY = res.data.data
                        this.setState({
                            ListCTY
                        })
                        console.log(ListCTY)

                    })
            })



    }


    getinfoInsert(ma, ten, dc, sodt, gd) {
        this.setState({
            mactEdit: ma,
            tenctEdit: ten,
            diachiEdit: dc,
            sdtEdit: sodt,
            giamdocEdit: gd
        })
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className=" header_add">
                    <Link to={'/'}><button className="btn btn-info " >Back</button></Link>

                    <h1 style={{ textAlign: "center" }}>Danh Sách Công Ty</h1>
                    <button type="button" className="btn btn-success " data-toggle="modal" data-target="#exampleModal">
                        +
                </button>

                </div>
                {/* btn them san pham */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">Tạo mới công ty</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="maCT">Mã Công Ty</label>
                                    <input type="text" className="form-control"
                                        onChange={e => { this.setState({ mact: e.target.value }) }}
                                        value={this.state.mact}
                                        id="maCT" aria-describedby="emailHelp" placeholder="Mã Công Ty" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tenCT">Tên Công Ty</label>
                                    <input type="text" className="form-control"
                                        onChange={e => { this.setState({ tenct: e.target.value }) }}
                                        value={this.state.tenct}
                                        id="tenCT" placeholder="Tên Công Ty" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="diachict">Địa Chỉ</label>
                                    <input type="text" className="form-control"
                                        onChange={e => { this.setState({ diachi: e.target.value }) }}
                                        value={this.state.diachi}
                                        id="diachict" placeholder="Địa Chỉ" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dthoaiCT">Điện Thoại</label>
                                    <input maxLength={10} type="text" className="form-control"
                                        onChange={e => { this.setState({ sdt: e.target.value }) }}
                                        value={this.state.sdt}
                                        id="dthoaiCT" placeholder="Điện Thoại" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="giamdocCT">Giám Đốc CT</label>
                                    <input type="text" className="form-control"
                                        onChange={e => { this.setState({ giamdoc: e.target.value }) }}
                                        value={this.state.giamdoc}
                                        id="giamdocCT" placeholder="Giám Đốc CT" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button id="closeModal" type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                <button type="button" className="btn btn-success btn-w" onClick={() => { this.createCTY() }} >Tạo</button>
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
                                <th>Mã Công Ty</th>
                                <th>Tên Công Ty</th>
                                <th>Địa Chỉ</th>
                                <th>Điện Thoại</th>
                                <th>Giám Đốc CT</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.ListCTY.map((obj, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            <h6>{obj.MaCT}</h6>
                                        </td>
                                        <td><h6>{obj.TenCT}</h6></td>
                                        <td>{obj.DiaChi}</td>
                                        <td>{obj.SoDienThoai}</td>
                                        <td>{obj.GiamDoc}</td>
                                        <td style={{ maxWidth: "100px" }}>
                                            <button
                                                onClick={() => { this.getinfoInsert(obj.MaCT, obj.TenCT, obj.DiaChi, obj.SoDienThoai, obj.GiamDoc) }}
                                                className="btn btn-primary mg-10" data-toggle="modal" data-target="#suaForm">Sửa</button>
                                            <button onClick={() => { this.deleteCTY(obj.MaCT) }} className="btn btn-danger mg-10">Xóa</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {/* sủa form dialog */}
                    <div className="modal fade" id="suaForm" tabIndex="-1" role="dialog" aria-labelledby="suaFormLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="suaFormLabel">Sửa thông tin công ty</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="maCTSua">Mã Công Ty</label>
                                        <input type="text"
                                            onChange={e => { this.setState({ mactEdit: e.target.value }) }}
                                            value={this.state.mactEdit}
                                            className="form-control" id="maCTSua" placeholder="Mã Công Ty" disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tenCTSua">Tên Công Ty</label>
                                        <input type="text"
                                            onChange={e => { this.setState({ tenctEdit: e.target.value }) }}
                                            value={this.state.tenctEdit}
                                            className="form-control" id="tenCTSua" placeholder="Tên Công Ty" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="diachictSua">Địa Chỉ</label>
                                        <input type="text"
                                            onChange={e => { this.setState({ diachiEdit: e.target.value }) }}
                                            value={this.state.diachiEdit}
                                            className="form-control" id="diachictSua" placeholder="Địa Chỉ" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dthoaiCTSua">Điện Thoại</label>
                                        <input type="text"
                                            onChange={e => { this.setState({ sdtEdit: e.target.value }) }}
                                            value={this.state.sdtEdit}
                                            className="form-control" id="dthoaiCTSua" placeholder="Điện Thoại" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="giamdocCTSua">Giám Đốc CT</label>
                                        <input type="text"
                                            onChange={e => { this.setState({ giamdocEdit: e.target.value }) }}
                                            value={this.state.giamdocEdit}
                                            className="form-control" id="giamdocCTSua" placeholder="Giám Đốc CT" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button id="closeModal1" type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                    <button onClick={() => { this.updateCTY() }} type="button" className="btn btn-success btn-w" >Chấp Nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* sủa form dialog */}
                </div>

                {/* hien thị danh sách */}



            </div >
        );
    }
}

export default congty;
