import './buttons.css';

const navButtons = ()=>{
    
    return(
        <div className='buttons-container'>

                <button className='Btn'  onClick={() => {console.log(`hice click`)}}>Componentes</button>
                <button className='Btn'>Periféricos</button>
                <button className='Btn'>Pc armada</button>
        </div>
    )
}

export default navButtons;