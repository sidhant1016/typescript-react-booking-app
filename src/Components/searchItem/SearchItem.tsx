import React from 'react'
import "./SearchItem.css"
import { Link } from 'react-router-dom';



const SearchItem = () => {
  return (
    <div className="SearchItem">
      <img
        src="https://static.ffx.io/images/$zoom_1%2C$multiply_0.3545%2C$ratio_1.5%2C$width_1749%2C$x_250%2C$y_291/t_crop_custom/q_86%2Cf_auto/a251acaee490b82e661ae0f9d97e1647ab9abbcf"
        alt=""
        className="siImg"
      />
     
      <div className="siDesc">
        <h1 className="siTitle">Hotel Oberoi UDaivillas</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to="/hotels/:id">
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default  SearchItem ;
