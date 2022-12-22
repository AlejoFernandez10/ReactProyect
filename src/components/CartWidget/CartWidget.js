import './CartWidget.css';
import logoCart from '../../carrito-icon.png';


const cartWidget = ()=>{

    return(
        <div className="cartWidget-container">
                <img alt='cart' className='cartLogo' src={logoCart} height="40px" width="40px"></img>
                <span className='contador'>0</span>
        </div>

    )

}


export default cartWidget;