import React from 'react'
import Features from "../../Components/features/Features"
import Navbar from "../../Components/Navbar"
import Header from "../../Components/header/Header"
import Property from "../../Components/property/PropertyList"
import FeatureProperty from "../../Components/featureProperty/FeatureProperty"
import Contact from "../../Components/contact/Contact"
import Footer from  "../../Components/footer/Footer"
import "./Home.css"


const Home = () => {
  return (
    <div>
     <Navbar/>
     <Header type="list"/>
     <div className="homeContainer">
      <Features/>
      <h1 className="homeTitle ">
      Explore India 
      </h1>
      <Property/>
      <h1 className="homeTitle ">
        Top 5 Hotels in India
      </h1>
      <FeatureProperty/>
      <Contact/>
      <Footer/>
     </div>
    </div>
  )
}

export default Home

