import React from "react";
import NavbarLayout from './../components/NavbarLayout';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavbarLayout link="#about-me" navname="About Me yeee"/>
                <NavbarLayout link="#fav-foods" navname="Favourite Foods"/>
                <NavbarLayout link="#contact" navname="Contact Details"/>
            </ul>
        </nav>
    );  
}

export default Navbar;