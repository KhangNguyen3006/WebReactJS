import React, { Component } from 'react';

import hinhicon from '../../assets/imgs/icon-smartphone.png';


class MegaMenu extends Component {

  componentDidMount(){
    
  }

  megamenu() {
    var button = document.getElementsByClassName('accordion');
    var numbutton = buttons.length;
    for (let i = 0; i < numbutton; i++) {
      buttons[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight)
          panel.style.maxHeight = null;
        else {
          panel.style.maxHeight=panel.scrollHeight+"px";
        }

      })
    }
  }

  render() {
    return (
      <div className='accordionMenuDiv'>

        <button className='accordion'>
          <img className='accordionMenuIcon' src={hinhicon} alt='' />
          Samsung
        </button>
        <div className='panel'>
          <ul>
            <li>
              <a className='accordionItem' href='#st'>Samsung Galaxy Fold</a>
            </li>

            <li>
              <a className='accordionItem' href='#st'>Samsung Galaxy Fold</a>
            </li>

            <li>
              <a className='accordionItem' href='#st'>Samsung Galaxy Fold</a>
            </li>

          </ul>
        </div>

      </div>
    )
  }
}

export default MegaMenu
