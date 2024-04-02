import React from "react"
import'./App.css'
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/hero/Hero";
import Habi from "./componentes/skills/Habi";

const App = () => {
    return(
       <>
            <Navbar/>
            <div className="container">
            <Hero/>
            <Habi/>
            </div>
       </>
    )
}

export default App