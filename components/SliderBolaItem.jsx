import React from 'react';

function SliderBolaItem({number, num}) {
    return (
        <div className={(number !== num) ? 'slider-bola' : 'slider-bola slider-green'}/>
    );
}

export default SliderBolaItem;
