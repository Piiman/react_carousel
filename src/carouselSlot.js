import React from 'react';

const Slot = ({image, title, text, link}) => (
    <div onClick= {() =>window.location.href=link} className="carousel_slot">
        <img src={image} alt=""/>
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    </div>
);

export default Slot;