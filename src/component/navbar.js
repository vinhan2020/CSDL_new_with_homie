import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class navbar extends Component {


    render() {

        return (
            <div>
                <header>

                    <a href="/" className="logo aaa"><span>LOGO</span></a>
                    <ul>
                        <li><Link to={'/'}>Trang Chủ</Link> </li>
                        <li><Link to={'/khachhang'}>Khách Hàng</Link></li>
                        <li><Link to={'/congty'}>Công Ty</Link></li>
                        <li><Link to={'/hangsx'}>Hãng Sản Xuất</Link></li>
                        <li><Link to={'/sanpham'}>Sản Phẩm</Link></li>
                        <li><Link to={'/hoadon'}>Hóa Đơn</Link></li>

                        {/* <li className="dropdown">
                            <span>Profile </span>
                            <div className="dropdown-content">
                                <a style={{ textDecoration: "none" }} href="/#">Contact</a>
                            </div>
                        </li> */}
                    </ul>
                </header>
            </div>
        );
    }
}

export default navbar;
