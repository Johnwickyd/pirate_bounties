import React from "react";
import Card from "./Card";
import "./App.css";

function CardList({ pirates }) {
    return (
        <div className="cardlist">
            {
                pirates.map((user, i) => {
                    return <Card key={pirates[i].id} image={pirates[i].image} name={pirates[i].name} money={pirates[i].money} />
                })
            }
        </div>

    );

}
export default CardList;