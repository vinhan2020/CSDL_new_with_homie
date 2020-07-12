import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar'
import Axios from 'axios'
import Swal from 'sweetalert2'
import dayjs from 'dayjs'

class hangsx extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ListHang: [],
            ListCTY: [],
            mah: '',
            tenhang: '',
            quocgia: '',
            mact: '',

            mahEdit: '',
            tenhangEdit: '',
            quocgiaEdit: '',
            mactEdit: '',
        }
    }

    componentDidMount() {
        Axios.get('https://baitap-mongo.herokuapp.com/Api/HangSanXuat/GetAll')
            .then((res) => {
                const ListHang = res.data.data
                this.setState({
                    ListHang
                })
                console.log(ListHang)
            })
        Axios.get("https://baitap-mongo.herokuapp.com/Api/CongTy/GetAll")
            .then((res) => {
                const ListCTY = res.data.data
                this.setState({
                    ListCTY
                })
                console.log(ListCTY)

            })
    }

    createH() {
        const hang = {
            mah: this.state.mah,
            tenhang: this.state.tenhang,
            quocgia: this.state.quocgia,
            mact: this.state.mact,
        }
        Axios.post('https://baitap-mongo.herokuapp.com/Api/HangSanXuat/Insert', hang)
            .then((res) => {
                if (res.data.status) {
                    Swal.fire({
                        title: res.data.message,
                        icon: "success",
                        timer: 1000
                    })
                    document.getElementById('closeModal').click()
                }
                else {
                    Swal.fire({
                        title: res.data.message,
                        timer: 1000
                    })
                }
            })
            .then(() => {
                Axios.get('https://baitap-mongo.herokuapp.com/Api/HangSanXuat/GetAll')
                    .then((res) => {
                        const ListHang = res.data.data
                        this.setState({
                            ListHang
                        })
                        console.log(ListHang)
                    })
            })
    }

    deleteH(id) {
        Swal.fire({
            title: "Delete this voucher ? ",
            text: "",
            icon: "question",
            showConfirmButton: true,
            showCancelButton: true
        }).then(e => {
            if (e.value) {
                Axios.post('https://baitap-mongo.herokuapp.com/Api/HangSanXuat/Delete', {
                    mah: id
                })
                    .then(() => {
                        Axios.get('https://baitap-mongo.herokuapp.com/Api/HangSanXuat/GetAll')
                            .then((res) => {
                                const ListHang = res.data.data
                                this.setState({
                                    ListHang
                                })
                                console.log(ListHang)
                            })
                    })
            }
        })
    }

    updateH() {
        const upH = {
            mah: this.state.mahEdit,
            tenhang: this.state.tenhangEdit,
            quocgia: this.state.quocgiaEdit,
            mact: this.state.mactEdit,
        }
        Axios.post('https://baitap-mongo.herokuapp.com/Api/HangSanXuat/Update', upH)
            .then((res) => {
                if (res.data.status) {
                    Swal.fire({
                        title: res.data.message,
                        icon: "success",
                        timer: 1000
                    })
                    document.getElementById('closeModal1').click()
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
                Axios.get('https://baitap-mongo.herokuapp.com/Api/HangSanXuat/GetAll')
                    .then((res) => {
                        const ListHang = res.data.data
                        this.setState({
                            ListHang
                        })
                        console.log(ListHang)
                    })
            })

    }
    getinforInser(ma, ten, quoc, mct) {
        this.setState({
            mahEdit: ma,
            tenhangEdit: ten,
            quocgiaEdit: quoc,
            mactEdit: mct,
        })

    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className=" header_add">
                    <Link to={'/'}><button className="btn btn-info " >Back</button></Link>

                    <h1 style={{ textAlign: "center" }}>Danh Sách Hãng Sản Xuất</h1>
                    <button type="button" className="btn btn-success " data-toggle="modal" data-target="#exampleModal">
                        +
                </button>

                </div>
                {/* btn them san pham */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">Tạo mới hãng sản xuất</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="maH">Mã Hãng</label>
                                    <input type="text" onChange={e => { this.setState({ mah: e.target.value }) }}
                                        value={this.state.mah}
                                        className="form-control" id="maH" placeholder="Mã hãng" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tenH">Tên Hãng</label>
                                    <input type="text" onChange={e => { this.setState({ tenhang: e.target.value }) }}
                                        value={this.state.tenhang}
                                        className="form-control" id="tenH" placeholder="Tên hãng" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quocG">Quốc Gia</label>
                                    <input type="text" onChange={e => { this.setState({ quocgia: e.target.value }) }}
                                        value={this.state.quocgia}
                                        className="form-control" id="quocG" placeholder="Quốc gia" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="maCT">Mã Công Ty</label>
                                    <select className="form-control"
                                        value={this.state.mact}
                                        onChange={e => { this.setState({ mact: e.target.value }) }}>
                                        <option defaultValue="">--Chọn mã công ty--</option>
                                        {this.state.ListCTY.map((objCT, i) => {
                                            return (
                                                <option key={i}>
                                                    {objCT.MaCT}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button id="closeModal" type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                <button onClick={() => { this.createH() }} type="button" className="btn btn-success btn-w">Tạo</button>
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
                                <th>Mã Hãng</th>
                                <th>Tên Hãng</th>
                                <th>Quốc Gia</th>
                                <th>Mã Công Ty</th>
                                <th>Ngày Tạo</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.ListHang.map((obj, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            <h6>{obj.MaH}</h6>
                                        </td>
                                        <td><h6>{obj.TenHang}</h6></td>
                                        <td>{obj.QuocGia}</td>
                                        <td>{obj.MaCT}</td>
                                        <td>{dayjs(obj.CreatedDate).format("DD-MM-YYYY")}</td>
                                        <td style={{ maxWidth: "100px" }}>
                                            <button className="btn btn-primary mg-10"
                                                onClick={() => { this.getinforInser(obj.MaH, obj.TenHang, obj.QuocGia, obj.MaCT) }}
                                                data-toggle="modal" data-target="#suaForm">Sửa</button>
                                            <button onClick={() => { this.deleteH(obj.MaH) }} className="btn btn-danger mg-10">Xóa</button></td>

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
                                    <h4 className="modal-title" id="suaFormLabel">Sửa thông tin hãng sản xuất</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="maHSua">Mã Hãng</label>
                                        <input type="text"
                                            onChange={e => { this.setState({ mahEdit: e.target.value }) }}
                                            value={this.state.mahEdit}
                                            className="form-control" id="maHSua" placeholder="Mã hãng" disabled />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tenHSua">Tên Hãng</label>
                                        <input type="text"
                                            onChange={e => { this.setState({ tenhangEdit: e.target.value }) }}
                                            value={this.state.tenhangEdit}
                                            className="form-control" id="tenHSua" placeholder="Tên hãng" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="quocGSua">Quốc Gia</label>
                                        <input type="text"
                                            onChange={e => { this.setState({ quocgiaEdit: e.target.value }) }}
                                            value={this.state.quocgiaEdit}
                                            className="form-control" id="quocGSua" placeholder="Quốc gia" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="maCTSua">Mã Công Ty</label>
                                        <select id='maCTSua' className="form-control"
                                            onChange={e => { this.setState({ mactEdit: e.target.value }) }}
                                            value={this.state.mactEdit}>
                                            {this.state.ListCTY.map((objCT, i) => {
                                                return (
                                                    <option key={i}>
                                                        {objCT.MaCT}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button id="closeModal1" type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                    <button onClick={() => { this.updateH() }} type="button" className="btn btn-success btn-w">Chấp Nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* btn sua san pham */}
                </div>

                {/* hien thị danh sách */}

            </div>
        );
    }
}

export default hangsx;
