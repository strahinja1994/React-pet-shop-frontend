import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar (props) {
    return (
        <nav className={props.click ? 'nav' : 'nav-active'}>
            <button className="nav__button">
                <Link className="nav__link" onClick={props.closeMenu} to='/'>All Pets</Link>
            </button>
            <button className="nav__button">
                <Link className="nav__link" onClick={props.closeMenu} to='/dogs'>Dogs</Link>
            </button>
            <button className="nav__button">
                <Link className="nav__link" onClick={props.closeMenu} to='/cats'>Cats</Link>
            </button>
            <button className="nav__button">
                <Link className="nav__link" onClick={props.closeMenu} to='/rodents'>Rodents</Link>
            </button>
            <button className="nav__button">
                <Link className="nav__link" onClick={props.closeMenu} to='/birds'>Birds</Link>
            </button>
        </nav>
    )
}