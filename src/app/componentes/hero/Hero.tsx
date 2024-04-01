import React from "react"
import './hero.css'

const Hero = () => {
    return <section className="hero-container">
        <div className="hero-container">
            <h2>construindo experiências digitais que inspiram</h2>
            <p>
            passionate frontend developer | transforming 
            ideas seamless and visually stunning web solutions
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="./assts/imagem/Developer_Stickers_for_Sale-removebg-preview.png" alt="" />
                </div>
                     <img src="./assts/imagem/my end dev.jpg" alt="" />
            </div>
            <div  className="tech-icon">
                <div className="tech-icon">
                    <img src="./assts/imagem/HTML5_without_wordmark_color_Logo_PNG_Vector__SVG__Free_Download-removebg-preview (1).png" alt="" />
                </div>
                <div  className="tech-icon">
                    <img src="./assts/imagem/Javascript_programming_language_icon-removebg-preview.png" alt="" />
                </div>
                <div  className="tech-icon">
                    <img src="./assts/imagem/CSS3_-_MI_PORTAL-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    </section>;
};

export default Hero 