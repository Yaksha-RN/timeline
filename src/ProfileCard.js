import React from "react";
import dp from "./Images/whatsAppDP.jpeg";
import './ProfileCard.css';
import { useSpring, animated, config } from '@react-spring/web'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.2]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    
const ProfileCard = () => {
    const [{ xys }, api] = useSpring(() => ({ 
        xys: [0, 0, 1], 
        config: {
            mass: 1,
            friction: 4,
            tension: 200,
        },
    }))
    const handleMouseLeave = () => {
        api.start({xys: [0, 0, 1]})
    }
    const handleMouseMove = e => {
        api.start({xys: calc(e.clientX, e.clientY)})
    }

    return (
        <div className="main-container">
            <div className="container">
                <div className="front-card">
                    <img src={dp}/>
                    <h2>YAKSHA RAM NANDAN</h2>
                    <h3>Full-Stack Developer</h3>
                    <h4>Ex- BharatAgri, Bangalore</h4>
                    <h4>Ex- CitiBank, Pune</h4>
                </div>
                <div className="back-card">
                    <animated.img src={dp}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    style={{ transform: xys.to(trans) }}/>
                    <h4>8229048516</h4>
                    <h4>yaksharamnandan@gmail.com</h4>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;