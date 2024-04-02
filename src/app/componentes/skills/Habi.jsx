import React, { useState } from "react";
import'./Habi.css'
import { SKILLS }  from "./../utils/data";
import Skillscard from "./Skillcard";



const Skills = () => {

    const [selectedSkills, setSelectedSkills] = useState(SKILLS[0]);

        const handleSelectSkills {data} => {
            setSelectedSkills (data);
        };

    return ( 
       <section className="Skills-container">
       

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