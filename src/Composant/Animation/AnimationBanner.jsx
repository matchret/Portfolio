import React from 'react';
import {useLottie} from "lottie-react";
import animationData from "../../assets/Animation/animationBanner.json";

const AnimationBanner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'svg',
        height:""
        
        
    }
  
    const { View } = useLottie(defaultOptions);
  
    return <div className='animation-banner'>{View}</div>;
  };

export default AnimationBanner;