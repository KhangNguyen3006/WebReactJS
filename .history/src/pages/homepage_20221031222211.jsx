import React, { Component } from 'react'
import FeaturedProducts from '../components/home/featuredproducts'
import NewArrival from '../components/home/newarrival'
import HomeTop from '../components/home/hometop'



class HomePage extends Component {
  render() {
    return (
      <div>
        <FeaturedProducts />
        <NewArrival />
      </div>
    )
  }
}

export default HomePage
