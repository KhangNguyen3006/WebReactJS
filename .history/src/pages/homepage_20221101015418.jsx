import React, { Component } from 'react'
import FeaturedProducts from '../components/home/featuredproducts'
import HomeTop from '../components/home/hometop'
import NewArrival from '../components/home/newarrival'



class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeTop />
        <FeaturedProducts />
        <NewArrival />
      </div>
    )
  }
}

export default HomePage
