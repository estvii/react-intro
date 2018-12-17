import React from "react";
import PageTitle from './list-items/PageTitle';
import Navbar from './list-items/Navbar';
import AboutMe from './list-items/AboutMe';
import FavouriteFoods from './list-items/FavouriteFoods';
import Contact from './list-items/Contact';
import Footer from './list-items/Footer';

const App = () => {
    return(
        <div>
            <PageTitle/>
            <Navbar/>
            <AboutMe/>
            <FavouriteFoods/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;