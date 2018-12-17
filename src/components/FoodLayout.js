import React from "react";

const FoodLayout = (props) => {
    return(
            <div>
                <h4>{props.food}</h4>
                <img src={props.image} alt={props.alt}/>
                <p>Best time to eat: <span>{props.foodtime}</span></p>
                <p>Best place: <span>{props.location}</span></p>
            </div>
    );
}

export default FoodLayout;