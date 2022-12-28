import React from "react";
import dp from "./Images/whatsAppDP.jpeg";
import './ProfileCard.css';

const ProfileCard = () => {
    return (
        <div className="container">
            <img src={dp}/>
            <h2>YAKSHA RAM NANDAN</h2>
            <h3>Full-Stack Developer</h3>
            <h4>Ex- BharatAgri, Bangalore</h4>
            <h4>Ex- CitiBank, Pune</h4>
        </div>
    );
}

export default ProfileCard;