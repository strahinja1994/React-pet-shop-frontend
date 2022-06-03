import React from 'react';
import {data} from '../Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Rodents(){
    const rodents = data.map((rodent) => {

        if(rodent.breed === "rodent") {
            return(
                <div className="main__pet" key={rodent.id}>
                        <img className="main__pet-image" src={rodent.src} alt={rodent.alt}/>
                        <h3 className="main__pet-title">{rodent.name}</h3>
                        <p className="main__pet-price">Price: {rodent.price}$</p>
                        <div className="main__pet-icons">
                                <FontAwesomeIcon icon={faShoppingCart} className="main__pet-icons--cart"></FontAwesomeIcon>
                        </div>
                </div>
            )
        }
})

   return(
       <div>
           <div style={{backgroundColor:'#c8a5d4'}}>
                        <h1 className="main__title">Rodents</h1>
                        <main>
                                {rodents}
                        </main>
                </div>
       </div>
   )
}