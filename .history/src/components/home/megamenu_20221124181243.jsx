import React, { Component } from 'react';

import hinhicon from '../../assets/imgs/icon-smartphone.png';


class MegaMenu extends Component {

  constructor() {
    super();
    this.megamenu = this.megamenu.bind(this);
  }
  componentDidMount() {
    this.megamenu();
  }


  megamenu() {
    var buttons = document.getElementsByClassName("accordion");
    var numbutton = buttons.length;
    for (var i = 0; i < numbutton; i++) {
      buttons[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px"
        }
      })
    }
  }
  render() {
    return (
      <div class='accordionMenuDiv'>
        <button className='accordion'>
          <img src= {hinhicon} class='accordionMenuIcon' />
          Hoa Hong
        </button>
        <div className='panel accordionMenuDivInside'>
          <ul>
            <li><a href="#st" className='accordionItem'  > Hoa hồng David Austin</a></li>
            <li><a href="#st" className='accordionItem'> Hoa hồng Red Eden</a></li>
          </ul>
        </div>

        <button className='accordion'>
          <img src={hinhicon} class='accordionMenuIcon' />
          Hoa Hong
        </button>
        <div className='panel accordionMenuDivInside'>
          <ul>
            <li><a href="#st" className='accordionItem'  > Hoa hồng David Austin</a></li>
            <li><a href="#st" className='accordionItem'> Hoa hồng Red Eden</a></li>
          </ul>
        </div>

      </div>



    )
  }
}

export default MegaMenu