'use client'
import  React, { useState } from "react";
import'./Habi.css'
import { SKILLS }  from "./../utils/data";
import SkillsCard from "./Skillcard";



const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

        const handleSelectSkill = (data) => {
            setSelectedSkill (data);
        };

    return ( 
       <section className="Skills-container">
       

        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item) => (
                    <SkillsCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.teste === item.title}
                    onClick={() => {
                        handleSelectSkill(item);
                    }}
                    />
                ))}
                </div>

            <div className="skills-info">
               <SkillsInfoCard
               heading={selectedSkill.title}
               Skills={selectedSkill.skills}
               />
            </div>
        </div>
       </section>

       
    );
}

export default Skills