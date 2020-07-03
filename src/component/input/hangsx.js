import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar'

class hangsx extends Component {
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
                                    <input type="text" className="form-control" id="maH" placeholder="Mã hãng" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tenH">Tên Hãng</label>
                                    <input type="text" className="form-control" id="tenH" placeholder="Tên hãng" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quocG">Quốc Gia</label>
                                    <input type="text" className="form-control" id="quocG" placeholder="Quốc gia" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="maCT">Mã Công Ty</label>
                                    <input type="text" className="form-control" id="maCT" placeholder="Mã công ty" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ngatTao">Ngày Tạo</label>
                                    <input type="date" className="form-control" id="ngatTao" placeholder="Ngày tạo" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                <button type="button" className="btn btn-success btn-w">Tạo</button>
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
                            <tr>
                                <td>
                                    <h6>suzuky</h6>
                                </td>
                                <td><h6>abc</h6></td>
                                <td>a</td>
                                <td>b</td>
                                <td>c</td>
                                <td style={{ maxWidth: "100px" }}><button className="btn btn-primary mg-10" data-toggle="modal" data-target="#suaForm">Sửa</button>
                                    <button className="btn btn-danger mg-10">Xóa</button></td>

                            </tr>
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
                                        <input type="text" className="form-control" id="maHSua" placeholder="Mã hãng" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tenHSua">Tên Hãng</label>
                                        <input type="text" className="form-control" id="tenHSua" placeholder="Tên hãng" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="quocGSua">Quốc Gia</label>
                                        <input type="text" className="form-control" id="quocGSua" placeholder="Quốc gia" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="maCTSua">Mã Công Ty</label>
                                        <input type="text" className="form-control" id="maCTSua" placeholder="Mã công ty" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ngatTaoSua">Ngày Tạo</label>
                                        <input type="date" className="form-control" id="ngatTaoSua" placeholder="Ngày tạo" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                    <button type="button" className="btn btn-success btn-w">Chấp Nhận</button>
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
