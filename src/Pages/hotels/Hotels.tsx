import React from 'react'
import "./Hotels.css"
import Navbar from '../../Components/Navbar'
import Header from "../../Components/header/Header"
import Contact from "../../Components/contact/Contact"
import Footer from "../../Components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const Hotels = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-udaivilas-udaipur/room-and-suites/premier-room-with-pool-view/detail/udaivilas---premier-room-with-pool-view-1.jpg",
    },
    {
      src: "https://content.r9cdn.net/rimg/himg/9b/1d/8e/leonardo-2671749-Premier_Room_with_Semi_Pvt_Pool_-_Bathroom_O-144677.jpg?width=500&height=350&xhint=471&yhint=225&crop=true",
    },
    {
      src: "https://i0.wp.com/eventertainments.com/blog/wp-content/uploads/2021/01/102964661-h1-_mg_9086.jpg?fit=1880%2C1208&ssl=1",
    },
    {
      src: "https://www.weddingsbyneerajkamra.com/uploads/BlogPictures/default/udaivilas-hotel-udaipur.png",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgA3ge1cX0O-IQ9MH6BMgtO8CdNsSON9PrA&usqp=CAU",
    },
    {
      src: "https://tourist-images-prd-s3.s3.eu-west-1.amazonaws.com/fetst38j02kbf96wghcfg0oe5clc",
    },
  ];

  const handleOpen = (i:any) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction:any) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Hotel Oberio Udaivillas</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>HMGC+VVV, Badi-Gorela-Mulla Talai Rd, Haridas Ji Ki Magri, Pichola, Udaipur, Rajasthan 313001</span>
          </div>
          <span className="hotelDistance">
            Excellent location from Feteh sagar pal
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free restaurant coupan
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              Boasting an outdoor swimming pool, a garden, and a shared lounge, The Riverside Estate - 4Bedroom Private Pool Villa in Udaipur features accommodation in Udaipur with free WiFi and mountain views. This villa offers a terrace as well as a bar. ❤️❤️❤️ was there with my child of 5 years and my labrador dog of 8 years. I was received very well by the caretaker. They were in touch with me and guided me well on how to reach and made sure I had a comfortable stay. I like homely food and it was prepared as per my taste. This is a four bedroom villa in middle of a large estate and a river running by. The pool was crystal clean which frankly I wasn't expecting. I can give top stars for hygiene and cleanliness. This is one place where I would spend atleast a week. The rooms are huge and very nice sitout area. Beds are super comfortable . I had to ask the brand as I was inclined to buy it for my house. Definitely recommended. A TRUE GEM 👌👌❤️.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
export default Hotels
