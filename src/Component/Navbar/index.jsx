import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav>
      <div className="container">
        <ul className='d-flex gap-4 justify-content-center'>
          <li><Link to= '/'>Home</Link></li>
          <li><Link to = '/about'>About</Link></li>
          {/* <li><Link to = '/shop'>Shop</Link></li> */}
          <li><Link to = '/news'>News</Link></li>
          <li><Link to = '/register'>Register</Link></li>
         </ul>
      </div>
    </nav>
  )
}

export default Navbar
