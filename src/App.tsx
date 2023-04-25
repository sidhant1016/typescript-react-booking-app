import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/home/Home"
import List from "./Pages/list/List"
import Hotel from "./Pages/hotels/Hotels"
import Flight from "./Pages/flight/Flight"
import CarRedntals from "./Pages/carRentals/CarRentals"
import Taxies from "./Pages/taxies/Taxies"
import React from "react"



function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element = {<Home/>}/>
   <Route path="/hotels" element = {<List/>}/>
   <Route path="/hotels/:id" element = {<Hotel/>}/>
   <Route path="/flight" element = {<Flight/>}/>
   <Route path="/carRentals" element = {<CarRedntals/>}/>
   <Route path="/taxies" element = {<Taxies/>}/>
  

   </Routes>
   
  
   </BrowserRouter>
   

  );
}

export default App;
