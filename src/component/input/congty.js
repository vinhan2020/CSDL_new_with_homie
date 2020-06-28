import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar'

class congty extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className=" header_add">
                    <Link to={'/'}><button className="btn btn-info " >Back</button></Link>

                    <h1 style={{ textAlign: "center" }}>Danh Sách Công Ty</h1>
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
                                    <label htmlFor="maCT">Mã Công Ty</label>
                                    <input type="text" className="form-control" id="maCT" aria-describedby="emailHelp" placeholder="Mã Công Ty" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tenCT">Tên Công Ty</label>
                                    <input type="text" className="form-control" id="tenCT" placeholder="Tên Công Ty" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="diachict">Địa Chỉ</label>
                                    <input type="text" className="form-control" id="diachict" placeholder="Địa Chỉ" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dthoaiCT">Điện Thoại</label>
                                    <input type="number" className="form-control" id="dthoaiCT" placeholder="Điện Thoại" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="giamdocCT">Giám Đốc CT</label>
                                    <input type="text" className="form-control" id="giamdocCT" placeholder="Giám Đốc CT" />
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
                                <th>Mã Công Ty</th>
                                <th>Tên Công Ty</th>
                                <th>Địa Chỉ</th>
                                <th>Điện Thoại</th>
                                <th>Giám Đốc CT</th>
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

export default congty;
