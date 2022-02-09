import React from "react";
import { motion } from "framer-motion";
import "../scss/slider.scss";

const Slider = (props) => {
  const text = props.text;
  const length = text.length;
  const activeSlide = props.activeSlide;

  const animationOne = {
    hidden: { opacity: 0, translateY: "60px" },
    visible: {
      opacity: 1,
      translateY: "0px",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const animationTwo = {
    hidden: { opacity: 0, translateY: "60px" },
    visible: {
      opacity: 1,
      translateY: "0px",
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: "easeInOut",
      },
    },
  };
  const animationThree = {
    hidden: { opacity: 0, translateY: "60px" },
    visible: {
      opacity: 1,
      translateY: "0px",
      transition: {
        duration: 1.4,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="slider-container">
      <motion.img
        variants={animationOne}
        initial="hidden"
        animate="visible"
        src={text[activeSlide].image}
        className="slider-image"
        alt="fashion slide one"
      />
      <motion.img
        variants={animationTwo}
        initial="hidden"
        animate="visible"
        src={text[activeSlide + 1 < length ? activeSlide + 1 : 0].image}
        className="slider-image"
        alt="fashion slide two"
      />
      <motion.img
        variants={animationThree}
        initial="hidden"
        animate="visible"
        src={
          text[
            activeSlide + 2 < length
              ? activeSlide + 2
              : activeSlide === 2
              ? 1
              : 0
          ].image
        }
        className="slider-image"
        alt="fashion slide three"
      />
    </div>
  );
};

export default Slider;
