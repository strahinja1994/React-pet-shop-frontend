import React from 'react';
import {data} from '../Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Birds(){
    const birds = data.map((bird) => {

        if(bird.breed === "bird") {
            return(
                <div className="main__pet" key={bird.id}>
                        <img className="main__pet-image" src={bird.src} alt={bird.alt}/>
                        <h3 className="main__pet-title">{bird.name}</h3>
                        <p className="main__pet-price">Price: {bird.price}$</p>
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
                        <h1 className="main__title">Birds</h1>
                        <main>
                                {birds}
                        </main>
                </div>
       </div>
   )
}