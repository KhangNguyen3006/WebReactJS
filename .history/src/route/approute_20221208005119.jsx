import React, { Component } from 'react'
import {Route, Routes } from "react-router-dom";

class AppRoute extends Component {
  render() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
        </Routes>
    )
  }
}

export default AppRoute
