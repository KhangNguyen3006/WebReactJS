import React, { Component } from 'react';

import hinhicon from '../../assets/imgs/icon-smartphone.png';


class MegaMenu extends Component {
  render() {
    return (
      <div>

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
