import './App.css';
import React, { Component } from 'react'
import HomePage from './pages/homepage'
import AppRoute from './route/approute';

class App extends Component {
  render() {

    return (
      <div>
        <AppRoute />
      </div>
      
    )
  }
}

export default App
