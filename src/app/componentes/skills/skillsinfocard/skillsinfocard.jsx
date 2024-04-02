import React from "react";
import "./Skillsinfocard.css"

const skillsinfocard  = ({ heading, skills }) => {
    return (
        <div className="skills-info-card">
            <h6>{ heading }</h6>
        </div>
    )
} 

export default skillsinfocard