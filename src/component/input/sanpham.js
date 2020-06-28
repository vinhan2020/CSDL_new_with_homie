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
                                    <label htmlFor="maSP">Mã Sản Phẩm</label>
                                    <input type="text" className="form-control" id="maSP" aria-describedby="emailHelp" placeholder="Mã Sản Phẩm" />
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

export default sanpham;
