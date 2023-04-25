import React from 'react'
import "./PropertyList.css"

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://www.hlimg.com/images/stories/738X538/capture_1550022367-7773e.PNG" alt="" className="PImg" />
            <h3>Chittorgarh fort</h3>
            
        </div>
        <div className="pListItem">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/183128172_80e060c6cf_z_20190718114549.jpg" alt="" className="PImg" />
            <h3>Manali</h3>
            
        </div>
        <div className="pListItem">
            <img src="https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=612x612&w=0&k=20&c=r5or5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA=" alt="" className="PImg" />
            <h3>Ladakh</h3>
           
        </div>
        <div className="pListItem">
            <img src="https://www.holidify.com/images/bgImages/RISHIKESH.jpg" alt="" className="PImg" />
            <h3>Rishikesh</h3>
           
        </div>
        <div className="pListItem">
            <img src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1073721995_20191213105915_20191213105938.jpg" alt="" className="PImg" />
            <h3>Mumbai</h3>
            
        </div>
      
    </div>
  )
}

export default PropertyList
