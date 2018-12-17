import React from "react";

const NavbarLayout = (props) => {
    return(
        <nav>
            <ul>
                <li><a href={props.link}>{[props.navname]}</a></li>
            </ul>
        </nav>
    );
}

export default NavbarLayout;