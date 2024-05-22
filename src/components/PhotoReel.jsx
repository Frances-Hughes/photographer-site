import React, { useEffect } from "react";
import "./PhotoReel.css";
import Reel1 from "../Photos/Reel/Reel1.png";
import Reel2 from "../Photos/Reel/Reel2.jpg";
import Reel3 from "../Photos/Reel/Reel3.png";
import Reel4 from "../Photos/Reel/Reel4.jpeg";
import Reel5 from "../Photos/Reel/Reel5.jpg";
import Reel6 from "../Photos/Reel/Reel6.jpg";
import Reel7 from "../Photos/Reel/Reel7.jpg";
import Reel8 from "../Photos/Reel/Reel8.jpg";
import Reel9 from "../Photos/Reel/Reel9.jpg";
import Reel10 from "../Photos/Reel/Reel10.jpg";
import Reel11 from "../Photos/Reel/Reel11.jpg";
import Reel12 from "../Photos/Reel/Reel12.png";

const images = [
  Reel1,
  Reel2,
  Reel3,
  Reel4,
  Reel5,
  Reel6,
  Reel7,
  Reel8,
  Reel9,
  Reel10,
  Reel11,
  Reel12,
];

const PhotoReel = () => {
  useEffect(() => {
    const logosContainer = document.querySelector(".logos");
    const logosSlide = document.querySelector(".logos-slide").cloneNode(true);
    logosContainer.appendChild(logosSlide);
  }, []);

  return (
    <div className="logos">
      <div className="logos-slide">
        {images.map((image, index) => (
          <img src={image} alt={`Reel ${index + 1}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PhotoReel;
