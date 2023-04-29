import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='head'><span className='the'>The</span><span className='siren'>Siren</span> </div>
        <div >
        <button className='toggler navbar-toggler' type='button' data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-light p-4">
      <center>
      <ul className='navlist' type="none">
            <li><Link to='/home' className='li'>Home</Link></li>
            <li><Link to='/bollywood' className='li'>Bollywood</Link></li>
            <li><Link to='/technology' className='li'>Technology</Link></li>
            <li><Link to='/hollywood' className='li'>Hollywood</Link></li>
            <li><Link to='/fitness' className='li'>Fitness</Link></li>
            <li><Link to='/food' className='li'>Food</Link></li>
        </ul>
      </center>
    
      
    </div>
  </div>
        </div>
        
        <ul className='navlist' id='list' type="none">
            <li><Link to='/home' className='li'>Home</Link></li>
            <li><Link to='/bollywood' className='li'>Bollywood</Link></li>
            <li><Link to='/technology' className='li'>Technology</Link></li>
            <li><Link to='/hollywood' className='li'>Hollywood</Link></li>
            <li><Link to='/fitness' className='li'>Fitness</Link></li>
            <li><Link to='/food' className='li'>Food</Link></li>
        </ul>
        <hr className='navhr'/>
        {/* bollywood stories*/}
    </div>
  )
}

export default Navbar