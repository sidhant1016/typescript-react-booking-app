import React from 'react'
import "./Flight.css"
import Navbar from "../../Components/Navbar"
import Header from "../../Components/header/Header"

const Flight = () => {
  return (

   <div>
    <Navbar/>
    <Header type="list"/>
    <div className="flightContainer">
        <div className="flight"></div>
        <h1>
            its flight page 
            
        </h1>
    </div>

   </div>
      

  )
}

export default Flight
