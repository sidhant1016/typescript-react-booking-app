import React from 'react'
import {  FaStar} from "react-icons/fa";
import "./FeatureProperty.css"

const FeatureProperty = () => {
  return (
    <div className='fp'>
        <div className="fItem">
            <img src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/0ffersimage/Master%20Exterior%20Image.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" alt="" className="fImag" />
            <h3 className='fpName'>Hotel Taj mahal</h3>
            <span className='fpCity'>Mumbai
            </span>
            <p className='fpPrice'>Starting from $250</p>
            <div className='fpRating'><span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            </div>
            
            
        </div>
        <div className="fItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/e2/46/dd/premier-rooms-with-semi.jpg?w=700&h=-1&s=1" alt="" className="fImag" />
            <h3 className='fpName'>Hotel oberoi udaivilas</h3>
            <span className='fpCity'>Udaipur
            </span>
            <p className='fpPrice'>Starting from $400</p>
            <div className='fpRating'><span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            </div>
            
        </div>
        <div className="fItem">
            <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201712271350157047-302150be3e8e11ea9cf90242ac110006.jpg" alt="" className="fImag" />
            <h3 className='fpName'>Hotel Hyaat Palace</h3>
            <span className='fpCity'>Hyderabad
            </span>
            <p className='fpPrice'>Starting from $450</p>
            <div className='fpRating'><span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            
            </div>
            
        </div>
        <div className="fItem">
            <img src="https://cdn0.weddingwire.in/vendor/9648/3_2/960/jpg/facade-shot-1_15_39648-161701226287479.jpeg" alt="" className="fImag" />
            <h3 className='fpName'>Hotel Leela Palace</h3>
            <span className='fpCity'>Banglore
            </span>
            <p className='fpPrice'>Starting from $200</p>
            <div className='fpRating'><span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            
            </div>
            
        </div>
        <div className="fItem">
            <img src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/13/68/136805_v5.jpeg" alt="" className="fImag" />
            <h3 className='fpName'>Hotel Lake Palace</h3>
            <span className='fpCity'>Udaipur
            </span>
            <p className='fpPrice'>Starting from $450</p>
            <div className='fpRating'><span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            </div>
            
        </div>
      
    </div>
  )
}

export default FeatureProperty
