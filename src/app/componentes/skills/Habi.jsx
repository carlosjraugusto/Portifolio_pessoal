'use client'
import React, { useState } from "react";
import './Habi.css';
import { SKILLS } from "../utils/Data";
import SkillsCard from "./Skillcard";
import SkillsInfoCard from "./skillsinfocard/Skillsinfocard"; 


const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
    
    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };
    console.log(SKILLS);

    return (
        <section className="skills-container">
            <div className="skills-content">
                <div className="skills">
                    {SKILLS.map((item) => (
                        <SkillsCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            skills={item.skills} // Passa todas as habilidades do item
                            isActive={selectedSkill.title === item.title} // Corrigido para verificar o título
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
    
};

export default Skills;
