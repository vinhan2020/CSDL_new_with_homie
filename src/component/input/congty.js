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
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                <button type="button" className="btn btn-success btn-w" >Tạo</button>
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
                                <td style={{ maxWidth: "100px" }}>
                                    <button className="btn btn-primary mg-10" data-toggle="modal" data-target="#suaForm">Sửa</button>
                                    <button className="btn btn-danger mg-10">Xóa</button>
                                </td>



                            </tr>
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
                                        <input type="text" className="form-control" id="maCTSua" placeholder="Mã Công Ty" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tenCTSua">Tên Công Ty</label>
                                        <input type="text" className="form-control" id="tenCTSua" placeholder="Tên Công Ty" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="diachictSua">Địa Chỉ</label>
                                        <input type="text" className="form-control" id="diachictSua" placeholder="Địa Chỉ" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dthoaiCTSua">Điện Thoại</label>
                                        <input type="number" className="form-control" id="dthoaiCTSua" placeholder="Điện Thoại" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="giamdocCTSua">Giám Đốc CT</label>
                                        <input type="text" className="form-control" id="giamdocCTSua" placeholder="Giám Đốc CT" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary btn-w" data-dismiss="modal">Đóng</button>
                                    <button type="button" className="btn btn-success btn-w" >Chấp Nhận</button>
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
