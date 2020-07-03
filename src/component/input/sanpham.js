import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar'

class sanpham extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className=" header_add">
                    <Link to={'/'}><button className="btn btn-info " >Back</button></Link>

                    <h1 style={{ textAlign: "center" }}>Danh Sách Sản Phẩm</h1>
                    <button type="button" className="btn btn-success " data-toggle="modal" data-target="#exampleModal">
                        +
                </button>

                </div>
                {/* btn them san pham */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">Tạo mới sản phẩm</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="maSP">Mã Sản Phẩm</label>
                                    <input type="text" className="form-control" id="maSP" placeholder="Mã Sản Phẩm" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tenSP">Tên Sản Phẩm</label>
                                    <input type="text" className="form-control" id="tenSP" placeholder="Tên Sản Phẩm" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mausac">Màu Sắc</label>
                                    <input type="text" className="form-control" id="mausac" placeholder="Màu sắc" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dongia">Đơn Giá</label>
                                    <input type="number" className="form-control" id="dongia" placeholder="Đơn Giá" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="maH">Mã Hãng</label>
                                    <input type="text" className="form-control" id="maH" placeholder="Mã Hãng" />
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
                                <th>Mã Sản Phẩm</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Màu Sắc</th>
                                <th>Đơn Giá</th>
                                <th>Mã Hãng</th>
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
                    {/* btn them san pham */}
                    <div className="modal fade" id="suaForm" tabIndex="-1" role="dialog" aria-labelledby="suaFormLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="suaFormLabel">Sửa thông tin sản phẩm</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="maSPSua">Mã Sản Phẩm</label>
                                        <input type="text" className="form-control" id="maSPSua" placeholder="Mã Sản Phẩm" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tenSPSua">Tên Sản Phẩm</label>
                                        <input type="text" className="form-control" id="tenSPSua" placeholder="Tên Sản Phẩm" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mausacSua">Màu Sắc</label>
                                        <input type="text" className="form-control" id="mausacSua" placeholder="Màu sắc" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dongiaSua">Đơn Giá</label>
                                        <input type="number" className="form-control" id="dongiaSua" placeholder="Đơn Giá" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="maHSua">Mã Hãng</label>
                                        <input type="text" className="form-control" id="maHSua" placeholder="Mã Hãng" />
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
                </div>

                {/* hien thị danh sách */}


            </div>
        );
    }
}

export default sanpham;
