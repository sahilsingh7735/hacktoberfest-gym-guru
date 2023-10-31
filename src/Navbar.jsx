import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const [nav, setNav] = useState(false)

    const handleClick = () =>{
        setNav(!nav)
    }

    return (
        <nav className='navbar'>
            <div className="logocontainer">
                {/* <img src="" alt="" /> */}  {/*You can add an image of the logo*/}
                <h1>Gym Guru</h1>
            </div>
            <ul className='menu-items'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/gallery'>Gallery</Link>
                </li>
                <li>
                    <Link to='/plans'>Plans</Link>
                </li>
                <li className='joinnow'>
                    <Link to='/join'>Join Now</Link>
                </li>
            </ul>

            {/* Dropdown menu icon on mobile screens */}
            <span onClick={handleClick} className='menuicon'>
              <i className={`fa-solid ${!nav ? 'fa-bars' : 'fa-times'}`}></i>
            </span>

            {
                nav && 
                <div className='dropdown_menu'>
                    <Link onClick={handleClick} to="/" className=''>
                        <span>Home</span>
                    </Link>
                    <Link onClick={handleClick} to="/about" className=''>
                        <span>About</span>
                    </Link>
                    <Link onClick={handleClick} to="/gallery" className=''>
                        <span>Gallery</span>
                    </Link>
                    <Link onClick={handleClick} to="/plans" className=''>
                        <span>Plans</span>
                    </Link>
                    <Link onClick={handleClick} to="/join" className=''>
                        <span className='joinnow'>Join Now</span>
                    </Link>
                </div>
            }
        </nav>
    )
}

export default Navbar