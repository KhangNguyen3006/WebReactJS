import './App.css';
import React, { Component } from 'react'
import AppRoute from './route/approute';
import HomePage from './pages/homepage';

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
