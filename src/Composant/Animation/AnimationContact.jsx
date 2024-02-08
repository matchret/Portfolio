import React from 'react';
import {useLottie} from "lottie-react";
import animationData from "../../assets/Animation/Contact.json";

const AnimationContact = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'svg',
        height:""
        
        
    }
  
    const { View } = useLottie(defaultOptions);
  
    return <div className='animation-form'>{View}</div>;
  };

export default AnimationContact;