import React from "react";
import dp from "./Images/whatsAppDP.jpeg";
import './ProfileCard.css';

const ProfileCard = () => {
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
                    <img src={dp}/>
                    <h4>8229048516</h4>
                    <h4>yaksharamnandan@gmail.com</h4>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;