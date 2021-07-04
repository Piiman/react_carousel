import React from 'react';

const Slot = ({image, title, text}) => (
    <div className="carousel_slot">
        <img src={image} alt=""/>
        <div>
            <h3>{title}</h3>
        </div>
    </div>
);

export default Slot;