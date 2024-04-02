import React from "react";
import'./Habi.css'
import { SKILLS }  from "./../utils/data";
import Skillscard from "./Skillcard";



const Skills = () => {
    return ( 
       <section className="Skills-container">
        <h5>Proficiência Técnica</h5>

        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item) => (
                    <Skillscard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    />
                ))}
                </div>

            <div className="skills-info"></div>
        </div>
       </section>

       
    );
}

export default Skills