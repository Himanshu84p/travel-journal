import React from "react";

import icon from "../images/Fill 219.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={require(`../images/${props.item.image}`)} alt="card image" className="card-image" />
            <div className="card-content">
                <div className="card-stats">
                    <img src={icon} alt="location" className="location-icon"/>
                    <span className="card-city">{props.item.city}</span>
                    <span className="grey"><a href={props.item.link}>view on Google Maps</a></span>
                </div>
                <p className="card-title">{props.item.title}</p>   
                <p className="card-date">{props.item.date}</p>
                <p className="card-desc">{props.item.description}</p>
            </div>
        </div>
    )
}

