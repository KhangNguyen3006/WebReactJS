import React, { Component } from 'react'
import NavMenuMobile from '../components/common/navmenumobile'
import FeaturedProducts from '../components/home/featuredproducts'
import HomeTopMobile from '../components/home/hometopmobile'
import NewArrival from '../components/home/newarrival'



class HomePage extends Component {
  render() {
    return (
      <div>

<div className='Mobile'></div>

        <NavMenuMobile />
        <HomeTopMobile />
        <FeaturedProducts />
        <NewArrival />
      </div>
    )
  }
}

export default HomePage
