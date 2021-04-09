import React, { useState } from 'react';
import SliderBolaItem from '../components/SliderBolaItem';

function SliderBola({num, sliders}) {
    //console.log(num)
    return (
        <>
            {
                sliders.map((slider,index) => {
                    let number = index + 1
                    return (
                        <SliderBolaItem key={index} number={number} num={num}/>
                    )
                })
            }
        </>
    );
}

export default SliderBola;
