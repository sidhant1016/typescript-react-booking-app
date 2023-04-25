import React from 'react'
import Navbar from "../../Components/Navbar"
import Header from "../../Components/header/Header"

const CarRentals = () => {
  return (
    <div>
        <Navbar/>
        <Header type ="list"/>
        <div className="crContainer">
            <h1>
                book your car here
            </h1>
        </div>
      
    </div>
  )
}

export default CarRentals
