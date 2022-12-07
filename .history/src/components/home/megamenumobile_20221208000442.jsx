import React, { Component } from 'react';

import hinhicon from '../../assets/imgs/icon-smartphone.png';


class MegaMenuMobile extends Component {

  constructor() {
    super();
    this.megamenu = this.megamenu.bind(this);
  }

  componentDidMount() {
    this.megamenu();
  }

  megamenu() {
    var buttons = document.getElementsByClassName("accordionMobile");
    var numbutton = buttons.length;
    for (let i = 0; i < numbutton; i++) {
      buttons[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      })
    }
  }




  render() {
    return (
      <div className='accordionMobileMenuDivMobile'>

        <button className='accordionMobile'>
          <img src={hinhicon} alt='' className='accordionMobileMenuIcon' />
          Samsung
        </button>
        <div className='panel'>
          <ul>
            <li><a className='accordionMobileItem' href="#st" > Galaxy Flip </a></li>
            <li><a className='accordionMobileItem' href="#st" > Galaxy Note </a></li>
          </ul>
        </div>

        <button className='accordionMobile'>
          <img src={hinhicon} alt='' className='accordionMobileMenuIcon' />
          Samsung
        </button>
        <div className='panel'>
          <ul>
            <li><a href="#st" className='accordionMobileItem'> Galaxy Flip </a></li>
            <li><a href="#st" className='accordionMobileItem'> Galaxy Note </a></li>
          </ul>
        </div>

      </div>



    )
  }
}

export default MegaMenuMobile
