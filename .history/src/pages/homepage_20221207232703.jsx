import React, { Component } from 'react'
import NavMenuMobile from '../components/common/navmenumobile'
import FeaturedProducts from '../components/home/featuredproducts'
import HomeTop from '../components/home/hometop'
import NewArrival from '../components/home/newarrival'



class HomePage extends Component {
  render() {
    return (
      <div>
        <NavMenuMobile />
        <HomeTopMobile />
        <FeaturedProducts />
        <NewArrival />
      </div>
    )
  }
}

export default HomePage
