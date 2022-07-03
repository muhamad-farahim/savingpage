import React, { useState, useEffect } from "react";
import sliderdata from "../dummydata/sliderdata";
import { technicalSupport, leftArrow, rightArrow } from '../imgs'

function Slider() {
  const [slide] = useState(sliderdata);
  const [activeSlide, setActiveSlide] = useState(1);

  const num = 100 / slide.length;
  const percentage = `${num}%`;
  const left = `${num * activeSlide - num}%`;
  const progressClass = { width: percentage, marginLeft: left };

  function moveSliderRight() {
    setActiveSlide(activeSlide === slide.length ? 1 : activeSlide + 1);
  }
  function moveSliderLeft() {
    setActiveSlide(activeSlide === 1 ? 5 : activeSlide - 1);
  }

  // useEffect(() => {
  //   const to = setTimeout(moveSlider, 5000);

  //   return () => {
  //     clearTimeout(to);
  //   };
  // }, [activeSlide]);

  function isOdd(num) {
    return num % 2;
  }

  const circleClass = !isOdd(activeSlide)
    ? "slider__imgcirc__left rounded-circle"
    : "slider__imgcirc__right rounded-circle";
  const txtClass = !isOdd(activeSlide)
    ? "slider__txt__right"
    : "slider__txt__left";


  const spans = slide.map((data, index) => {
    const className =
      index + 1 === activeSlide
        ? "slider__span slider__span--active"
        : "slider__span";

    return (
      <span key={index} className={className}>
        <h5>{data.h1}</h5>
        {data.text}
      </span>
    );
  });

  const IMGS = slide.map((data, index) => {
    const className =
      index + 1 === activeSlide
        ? "h-100 slider__img slider__img--active"
        : "h-100 slider__img";

    return <img key={index} className={className} src={data.img} alt="img" />;
  });

  return (
    <section className="page-tentang-slider pb-5">
      <div className="container">
        <div className="slider__main">
          <div className="slider__slide">
            <div className="slider__display">
              <div className={circleClass}>{IMGS}</div>
              <div className={txtClass}>{spans}</div>
            </div>
          </div>
          <div className="progress__progressbar">
            <div className="progress__progress" style={progressClass}>
              <img src={technicalSupport} alt="" />
            </div>
          </div>
        </div>
      </div>
      <img
        className="arrow arrow-right"
        style={activeSlide === sliderdata.length ? { display: "none" } : {}}
        src={rightArrow}
        onClick={moveSliderRight}
        alt="arrow left"
      />
      <img
        className="arrow arrow-left"
        style={activeSlide === 1 ? { display: "none" } : {}}
        src={leftArrow}
        onClick={moveSliderLeft}
        alt="arrow right"
      />
    </section>
  );
}

export default Slider;
