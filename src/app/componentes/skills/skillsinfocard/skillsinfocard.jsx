import React from "react";
import "./Skillsinfocard.css"

const SkillsInfoCard  = ({ heading, Skills }) => {
    return (
        <div className="skills-info-card">
            <h6>{heading}</h6>
            <div className="skills-info-content">
                {Skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className="skill-info">
                            <p>{item.skills}</p>
                            <p className="percentage">{item.porcentage}</p>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress" style={{ width: item.porcentage }}/>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SkillsInfoCard;
