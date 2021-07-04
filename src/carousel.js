import React, {useState}  from 'react';

import Slot from './carouselSlot'

const Carousel = ({data}) => {
    const [current, setCurrent] = useState(0);
    const length = data.length;

    const nextSlot = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    
    const prevSlot = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(data) || data.length <= 0) {
        return null;
    }

    return (
        <article>
            <div className="inner">
                {data.map((slot, index) => {
                    return (
                        <div key={index}>
                            {index === current && (
                            <Slot image={slot.image_banner} title={slot.name} text={slot.text}/>
                            )}
                        </div>
                    )
                })}
            </div>
            <div className="tabs">
                {
                    data.map((slot,index) => {
                        return <span className={current === index ? "tab active" : "tab"} onClick={() => setCurrent(index)}></span>  
                    })
                }
            </div>
            <div className="next" onClick={nextSlot}></div>
            <div className="prev" onClick={prevSlot}></div>
        </article>);
};
export default Carousel;