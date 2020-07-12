import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './component/Home'
import Login from './component/Login'
import HangSX from './component/input/hangsx'
import Congty from './component/input/congty'
import Sanpham from './component/input/sanpham'
import Khachhang from './component/input/khachhang'

import HoaDon from './component/input/hoadon'



function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/login'} component={Login} />
        <Route path={'/hangsx'} component={HangSX} />
        <Route path={'/congty'} component={Congty} />

        <Route path={'/sanpham'} component={Sanpham} />

        <Route path={'/khachhang'} component={Khachhang} />
        <Route path={'/hoadon'} component={HoaDon} />

        <Route path={'/'} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
