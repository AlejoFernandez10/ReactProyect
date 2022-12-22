import './Navbar.css';
import cartWidget  from '../CartWidget/CartWidget';
import navButtons from '../Buttons/buttons';




const Navbar = () => {

    return (
        <nav className="Navbar">
            <h1 style={{alignSelf: `flex-start`,color:`#61dafb`,fontSize:`30px`}}>CompuNext</h1>

            {navButtons()}

            {cartWidget()}
            

        </nav>
    )
}

export default Navbar;