import React from "react";
import {data} from "./Data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Main() {

        const pets = data.map((pet) => {

                return(
                <div className="main__pet" key={pet.id}>
                        <img className="main__pet-image" src={pet.src} alt={pet.alt}/>
                        <h3 className="main__pet-title">{pet.name}</h3>
                        <p className="main__pet-price">Price: {pet.price}$</p>
                        <div className="main__pet-icons">
                                <FontAwesomeIcon icon={faShoppingCart} className="main__pet-icons--cart" ></FontAwesomeIcon>
                        </div>
                </div>
                )
        })

        return(
                <div style={{backgroundColor:'#c8a5d4'}}>
                        <h1 className="main__title">All pets</h1>
                        <main>
                                {pets}
                        </main>
                </div>
        )
}
