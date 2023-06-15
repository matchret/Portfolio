import { Component } from 'react';
import Lottie from "react-lottie";
import animationData from "../../assets/Animation/animationBanner.json"

class AnimationBanner extends Component {          //Animation pour fichier .json avec react

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'svg',
            stop: false
            
        }
        return (
               <Lottie
                options={defaultOptions}
               />
        )
    };  
}
export default AnimationBanner;