import React, { Component } from 'react'

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
