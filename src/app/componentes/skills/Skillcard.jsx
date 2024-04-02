import React from "react";
import './Skllscard.css'

const Skillscard = ({ title, iconUrl, isActive, onClick }) => {
    return (
       <div className={`skills-card ${isActive ? "active" : ""}`}
       onClick={ () => onClick()}
       >
        <div className="skills-icon">
            <img src={iconUrl} alt={title} />
        </div>

          <span>{title}</span>  
       </div>
    )
}

export default Skillscard;
