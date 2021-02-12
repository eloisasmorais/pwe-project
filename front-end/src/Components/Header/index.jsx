import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo@2x.png';
import ngp from '../../assets/img/ngp.png';

import './styles.css'

function Header() {
  return ( 
      <header>
        <Link to="/">
          <img src={logo} alt="Fuleco Awards" className="logo" />
        </Link>
        <img src={ngp} alt="New Game Plus" className="ngp" />
      </header>
  )
}

export default Header;