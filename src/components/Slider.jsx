import React from "react";
import { motion } from "framer-motion";
import "../scss/slider.scss";
import carrousalOne from "../images/carrousal-one.jpg";
import carrousalTwo from "../images/carrousal-two.jpg";
import carrousalThree from "../images/carrousal-three.jpg";

const Slider = () => {
  const animationOne = {
    hidden: { opacity: 0, translateY: "60px" },
    visible: {
      opacity: 1,
      translateY: "0px",
      transition: {
        duration: 1,
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
        delay: 0.3
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
        delay: 0.5
      },
    },
  };
  return (
    <div className="slider-container">
      <motion.img
        variants={animationOne}
        initial="hidden"
        animate="visible"
        src={carrousalOne}
        alt="fashion slide one"
      />
      <motion.img
        variants={animationTwo}
        initial="hidden"
        animate="visible"
        src={carrousalTwo}
        alt="fashion slide two"
      />
      <motion.img
        variants={animationThree}
        initial="hidden"
        animate="visible"
        src={carrousalThree}
        alt="fashion slide three"
      />
    </div>
  );
};

export default Slider;
