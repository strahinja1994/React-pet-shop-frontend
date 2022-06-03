import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import Birds from "./pages/Birds";
import Rodents from "./pages/Rodents";

export default function App() {

    const [click,setClick] = React.useState(true);

    function handleClick () {
        setClick(prevClick => !prevClick)
    }

    function closeMenu() {
        setClick(!click)
    }

    return (
        <div className="container">
            <Header 
                click={click}
                handleClick={handleClick}
            />
            <Router>
                <Navbar 
                    click={click}
                    closeMenu={closeMenu}
                />
                <Routes>
                    <Route 
                        path='/'
                        exact element={<Home />}
                    />
                    <Route
                        path='/dogs'
                        element={<Dogs />}
                    />
                    <Route
                        path='/cats'
                        element={<Cats />}
                    />
                    <Route
                        path='/birds'
                        element={<Birds />}
                    />
                    <Route
                        path='/rodents'
                        element={<Rodents />}
                    />
                </Routes>
            </Router>
        </div>
    )
}