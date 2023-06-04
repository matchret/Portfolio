import React, { Component } from 'react';
import Lottie from "react-lottie";
import animationData from "../../assets/animatioLogo.json";
class AnimationNav extends Component {          //Animation pour fichier .json avec react
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'svg',
            stop: false
            
        }
        return (
            <div className="animation-nav">
               <Lottie
                options={defaultOptions}
                height={100}
               />
            </ div>
        )
    };  
}
export default AnimationNav;