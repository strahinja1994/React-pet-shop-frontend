import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {

    return (
        <header>
            <h1 className='header__title'>Pet Shop</h1>
            <div className='header__icons'>
                <FontAwesomeIcon icon={faShoppingCart} className='header__icons-cart'></FontAwesomeIcon>
                <FontAwesomeIcon icon={props.click ? faBars : faTimes} className='header__icons-icon' onClick={props.handleClick}></FontAwesomeIcon>
            </div>
        </header>
    )
}