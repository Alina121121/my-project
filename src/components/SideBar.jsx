import s from "./SideBar.module.css";
import slider from "../images/slider-pic.jpg"; 
import left from "../images/arrow-left.png";
import right from "../images/arrow-right.png";
import React, { useState } from "react";

const SideBar = () => {
  const slides = [
    {
      title: "Meet Brandi!",
      description: "creative one page template.",
      subTitle: "We are a team of professionals",
    },
    {
      title: "Explore Features",
      description: "discover all the amazing features.",
      subTitle: "Built for modern web applications",
    },
    {
      title: "Our Works",
      description: "check out some of our projects.",
      subTitle: "Innovative and creative solutions",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={s.sideBar}>
      <div className={s.slider}>
        <img src={slider} alt={`Slide ${currentImageIndex + 1}`} />
      </div>

      <div className={s.text}>
        <h1>{slides[currentImageIndex].title}</h1>
        <p>{slides[currentImageIndex].description}</p>
        <br />
        <h5>{slides[currentImageIndex].subTitle}</h5>
      </div>

      <div className={s.left}>
        <button onClick={prevImage}>
          <img src={left} alt="Previous" />
        </button>
      </div>
      <div className={s.right}>
        <button onClick={nextImage}>
          <img src={right} alt="Next" />
        </button>
      </div>

      <div className={s.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${s.dot} ${
              currentImageIndex === index ? s.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
