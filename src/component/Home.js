import React, { Component } from 'react';
import "./allCSS.css"
import Navbar from './navbar'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <section className="banner" >
                </section>
            </div>

        );
    }
}

export default Home;
