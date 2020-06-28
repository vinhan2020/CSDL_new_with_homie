import React, { Component } from 'react';
import "./allCSS.css"

class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    <a href="/#" className="logo">LOGO</a>
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">Contact</a></li>
                        <li className="dropdown">
                            <span>Profile </span>
                            <div className="dropdown-content">
                                <a style={{ textDecoration: "none" }} href="/#">Contact</a>
                            </div>
                        </li>
                    </ul>
                </header>
                <section className="banner" />
            </div>

        );
    }
}

export default Home;
