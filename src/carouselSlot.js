import React from 'react';

const Slot = ({image, title, text}) => (
    <div className="carousel_slot">
        <img src={image} alt=""/>
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    </div>
);

export default Slot;