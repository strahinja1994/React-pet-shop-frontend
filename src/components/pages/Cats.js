import React from 'react';
import {data} from '../Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Cats(){
    const cats = data.map((cat) => {

        if(cat.breed === "cat") {
            return(
                <div className="main__pet" key={cat.id}>
                        <img className="main__pet-image" src={cat.src} alt={cat.alt}/>
                        <h3 className="main__pet-title">{cat.name}</h3>
                        <p className="main__pet-price">Price: {cat.price}$</p>
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
                        <h1 className="main__title">Cats</h1>
                        <main>
                                {cats}
                        </main>
                </div>
       </div>
   )
}