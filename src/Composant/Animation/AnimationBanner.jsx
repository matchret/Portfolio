import React, { Component } from 'react';
import Lottie from "react-lottie";
import animationData from "../../assets/animationBanner.json";

class AnimationBanner extends Component {          //Animation pour fichier .json avec react
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'svg'
            
        }
        return (
            <>
               <Lottie
                options={defaultOptions}
               />
            </>
        )
    };  
}
export default AnimationBanner;