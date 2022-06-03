import React from 'react';
import {data} from '../Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Dogs() {

    const dogs = data.map((dog) => {

        if(dog.breed === "dog") {
            return(
                <div className="main__pet" key={dog.id}>
                        <img className="main__pet-image" src={dog.src} alt={dog.alt}/>
                        <h3 className="main__pet-title">{dog.name}</h3>
                        <p className="main__pet-price">Price: {dog.price}$</p>
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
                        <h1 className="main__title">Dogs</h1>
                        <main>
                                {dogs}
                        </main>
                </div>
       </div>
   )
}