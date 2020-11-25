import React from 'react';

import the_star_team from "../images/third_image.jpg";
import "../styles/players_cards.css"


const Player = (props) => {
    const item = props.item
    return (

        <div className="player">
            <div className="overflow ">
                <img className="Player" src={the_star_team}/>

            </div>


            <div className="player-body">
                <h4>Player</h4>
                <p>Name: {item.name}</p>
                <p>National: {item.national}</p>
                <p>Price: {item.price} euro</p>
            </div>
            <a href="#" className="btn button-outline">
                Buy now
            </a>


        </div>


    );

}

export default Player;