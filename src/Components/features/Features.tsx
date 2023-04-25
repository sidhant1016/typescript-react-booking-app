import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div>
      <div className="features">
      <a href="/Goa">
        
          <div className="featureItem">
            <img
              src="https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg"
              alt=""
              className="featureImg"
            />
            <div className="featuredTitles">
              <h1>Goa</h1>
            </div>
            
          </div>
          </a>
          
       
        
        <div className="featureItem">
          <img
            src="https://cdn.getyourguide.com/img/location/533591c8ce856.jpeg/68.jpg"
            alt=""
            className="featureImg"
          />

<a href="/Agra">
          <div className="featuredTitles">
            <h1>Agra</h1>
          </div>
          </a>
        </div>
       
        <div className="featureItem">
          <img
            src="https://images.thrillophilia.com/image/upload/s--aT91QNX5--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/013/602/original/1471702122_jaipur.jpg.jpg"
            alt=""
            className="featureImg"
          />
         
          <div className="featuredTitles">
            <h1>Rajasthan</h1>
           
          </div>
          
        </div>
        <a href="/Gujrat">
        <div className="featureItem">
          <img
            src="https://images.moneycontrol.com/static-hindinews/2022/09/unity-770x430.jpg?impolicy=website&width=770&height=431"
            alt=""
            className="featureImg"
          />
          <div className="featuredTitles">
            <h1>Gujrat</h1>
          </div>
        </div>
        </a>
        <a href="/Gujrat">
        <div className="featureItem">
          <img
            src="https://img.veenaworld.com/customized-holidays/india/south-india/shka19/shka19-exp-2.jpg"
            alt=""
            className="featureImg"
          />
          <div className="featuredTitles">
            <h1>Bangalore</h1>
          </div>
        </div>
        </a>
      </div>
     
    </div>
  );
};

export default Features;
