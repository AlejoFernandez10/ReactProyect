import React from 'react';
import './ItemListContainer.css';


const ItemListContainer = ({greeting})=>{


    return(
        <div className='main-container'>
                <h1 className='greetingTitle'>{greeting}</h1>
            
        </div>
    )

}

export default ItemListContainer;