import React from "react";
import FoodLayout from "../components/FoodLayout";

const FavouriteFoods = () => {
    return (
        <section id="fav-food">
            <h2>Favourite Foods</h2>
            <FoodLayout food="Pizza" foodtime="All the time" location="Queen Margharitas" image="/images/pizza.jpeg" alt="pizza"/>
            <FoodLayout food="Quesadillas" foodtime="Afternoon Siesta" location="Mejico" image="/images/quesadillas.jpeg" alt="quesadillas"/>
            <FoodLayout food="Icecream Pancakes" foodtime="Breaky" location="Pancakes on the rocks" image="/images/icecreamPancakes.jpg" alt="pancakes"/>
            <FoodLayout food="Loaded Fries" foodtime="During the game" location="My house" image="/images/loadedfries.jpg" alt="loaded fries"/>
        </section>
    );
}

export default FavouriteFoods;
