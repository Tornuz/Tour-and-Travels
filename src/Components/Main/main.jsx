import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineClipboardCheck, HiOutlineLocationMarker,} from "react-icons/hi";

import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";

import Aos from "aos";
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    imgsrc: img1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxirious stays and adventerous activities.",
  },
  {
    id: 2,
    imgsrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Machu Picchu is both a cultural and natural UNESCO World Heritage Site. Since its rediscovery in 1911, growing numbers of tourists have visited the site each year, with numbers exceeding 1.4 million in 2017.",
  },
  {
    id: 3,
    imgsrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the world’s largest collection of coral reefs, with 1,500 species of fish.",
  },
  {
    id: 4,
    imgsrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "Cappadocia is a land famous for its distinctive rock formation, historical heritage, and scenic hot air balloon trips.",
  },
  {
    id: 5,
    imgsrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "Guanajuato, the birthplace of famed muralist Diego Rivera, is also the site of Alhondiga de Ganaditas, a former town granary that became a revolutionary symbol after the heads of insurrectionists Hidalgo, Allende, Aldama and Jimenez were posted at the four corners of the building.",
  },
  {
    id: 6,
    imgsrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "The Cinque Terre are famous for their amazing natural landscape and colourful fishing villages perched on dramatic cliffs. UNESCO added the Cinque Terre to its list of World Heritage Sites because of their cultural landscape of great scenic and cultural value.",
  },
  {
    id: 7,
    imgsrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "Angkor Wat is an enormous Buddhist temple complex located in northern Cambodia. It was originally built in the first half of the 12th century as a Hindu temple.",
  },
  {
    id: 8,
    imgsrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "The Taj Mahal is considered to be the greatest architectural achievement in the whole range of Indo-Islamic architecture. Its recognised architectonic beauty has a rhythmic combination of solids and voids, concave and convex and light shadow; such as arches and domes further increases the aesthetic aspect.",
  },
  {
    id: 9,
    imgsrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Bali Indonesia. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity.",
  },
];

const Main = () => {

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgsrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id}
              data-aos="fade-up" 
              className="singleDestination">
                <div className="imageDiv">
                  <img src={imgsrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    Details <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
