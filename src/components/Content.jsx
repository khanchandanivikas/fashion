import React from "react";
import "../scss/content.scss";
import { motion } from "framer-motion";

const Content = (props) => {
  const text = props.text;
  const activeSlide = props.activeSlide;
  const headingAnimation = {
    hidden: { translateX: "40px" },
    visible: {
      translateX: "0px",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };
  const collectionAnimation = {
    hidden: { translateX: "-100px" },
    visible: {
      translateX: "0px",
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };
  const textAnimation = {
    hidden: { translateY: "50px" },
    visible: {
      translateY: "0px",
      transition: {
        duration: 1,
        delay: 0.1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <main className="content-container">
      {activeSlide === 0 && (
        <motion.h1
          variants={headingAnimation}
          initial="hidden"
          animate="visible"
        >
          CREA<span>TIVE</span> <span>DE</span>SIGN
        </motion.h1>
      )}
      {activeSlide === 1 && (
        <motion.h1
          variants={headingAnimation}
          initial="hidden"
          animate="visible"
        >
          <span>PASSION</span>NATE PUR<span>SUIT</span>
        </motion.h1>
      )}
      {activeSlide === 2 && (
        <motion.h1
          variants={headingAnimation}
          initial="hidden"
          animate="visible"
        >
          <span>BE</span> <span>YOU</span>RSELF
        </motion.h1>
      )}
      <div className="collection">
        <motion.h4
          variants={collectionAnimation}
          initial="hidden"
          animate="visible"
        >
          Collection 2022
        </motion.h4>
      </div>
      <motion.p variants={textAnimation} initial="hidden" animate="visible">
        {text[activeSlide].content}
      </motion.p>
      <motion.div
        variants={textAnimation}
        initial="hidden"
        animate="visible"
        className="shop"
      >
        <button>Shop now</button>
      </motion.div>
    </main>
  );
};

export default Content;
