import React from 'react';
import {useLottie} from "lottie-react";
import animationData from "../../assets/Animation/animatioLogo.json";


const AnimationNav = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'svg',
        height:""
        
    }
  
    const { View } = useLottie(defaultOptions);
  
    return <div className='nav-logo'>{View}</div>;
  };

export default AnimationNav;