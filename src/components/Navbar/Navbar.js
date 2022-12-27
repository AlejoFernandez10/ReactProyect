import React from 'react';
import './Navbar.css';
import cartWidget  from '../CartWidget/CartWidget';
import navButtons from '../Buttons/buttons';




const Navbar = () => {

    return (
        <nav className="Navbar">

            <div className='center-container'>

            <h2 style={{color:`#61dafb`,fontSize:`30px`}}>Compufy</h2>

            {navButtons()}

            {cartWidget()}

            </div>
            
            

        </nav>
    )
}

export default Navbar;