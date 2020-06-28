import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar'

class khachhang extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className=" header_add">
                    <Link to={'/'}><button className="btn btn-info " >Back</button></Link>

                    <h1 style={{ textAlign: "center" }}>Danh Sách Khách Hàng</h1>
                    <Link ><button type="button" class="btn btn-success " data-toggle="modal" data-target="#exampleModal">
                        +
                </button></Link>

                </div>
                {/* btn them san pham */}
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="form-group">
                                    <label htmlFor="maKH">Mã Khách Hàng</label>
                                    <input type="text" className="form-control" id="maKH" aria-describedby="emailHelp" placeholder="Mã Khách Hàng" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tenKH">Tên Khách Hàng</label>
                                    <input type="text" className="form-control" id="tenKH" placeholder="Tên Khách Hàng" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="diachi">Địa Chỉ</label>
                                    <input type="text" className="form-control" id="diachi" placeholder="Địa Chỉ" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dthoai">Điện Thoại</label>
                                    <input type="number" className="form-control" id="dthoai" placeholder="Điện Thoại" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ngayTao">Ngày Tạo</label>
                                    <input type="date" className="form-control" id="ngayTao" placeholder="Ngày tạo" />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
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
                                <th>Mã Khách Hàng</th>
                                <th>Tên Khách Hàng</th>
                                <th>Địa Chỉ</th>
                                <th>Điện Thoại</th>
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
                                <td style={{ maxWidth: "100px" }}><button className="btn btn-primary mg-10">Sửa</button>
                                    <button className="btn btn-danger mg-10">Xóa</button></td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* hien thị danh sách */}


            </div>
        );
    }
}

export default khachhang;
