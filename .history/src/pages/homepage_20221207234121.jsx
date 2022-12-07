import React, { Component } from 'react'
import NavMenuDesktop from '../components/common/navmenudesktop'
import NavMenuMobile from '../components/common/navmenumobile'
import FeaturedProducts from '../components/home/featuredproducts'
import HomeTop from '../components/home/hometop'
import HomeTopMobile from '../components/home/hometopmobile'
import NewArrival from '../components/home/newarrival'



class HomePage extends Component {
  render() {
    return (
      <div>

        <div className='Mobile'>
          <NavMenuMobile />
          <HomeTopMobile />
        </div>
        <div className="Desktop">
          <NavMenuDesktop />
          <HomeTop />
        </div>
        <NavMenuMobile />
        <HomeTopMobile />
        <FeaturedProducts />
        <NewArrival />
      </div>
    )
  }
}

export default HomePage
