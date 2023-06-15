import React from 'react';
import {useLottie} from "lottie-react";
import animationData from "../../assets/Animation/animationBanner.json"

const AnimationBanner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'svg',
        
    }
  
    const { View } = useLottie(defaultOptions);
  
    return <>{View}</>;
  };
export default AnimationBanner;