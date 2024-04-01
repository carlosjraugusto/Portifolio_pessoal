import React from "react"
import'./App.css'
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/hero/Hero";

const App = () => {
    return(
       <>
       <Navbar/>
       <div className="container">
        <Hero/>
       </div>
       </>
    )
}

export default App