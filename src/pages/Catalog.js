import React from 'react';
import Player from "../components/Player";
import "../styles/catalog.css"

const players = [{

    id: 0,
    name: "David de Gea",
    national: "Spain",
    price: 60,


},

    {
        id: 1,
        name: "Bruno Fernandes",
        national: "Portugal",
        price: 65,
    },

    {

        id: 2,
        name: "Harry Maguire",
        national: "England",
        price: 75,
    },
    {

        id: 3,
        name: "Pogba",
        national: "France",
        price: 85,
    },
    {

        id: 4,
        name: "Marcus Rashford",
        national: "England",
        price: 90,

    },
    {

        id: 5,
        name: "Donny van de Beek",
        national: "Netherlands",
        price: 55,
    },
]
export default function Catalog() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    {players.map(item => {
                        return <div className="col-md-4 ">
                            <Player item={item} key={item.id}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}
