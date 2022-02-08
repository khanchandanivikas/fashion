import React from "react";
import "../scss/social.scss";
import { motion } from "framer-motion";

const Social = () => {
  const socialanimation = {
    hidden: { opacity: 0, zIndex: 1 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.4,
      },
    },
  };

  return (
    <motion.div
      variants={socialanimation}
      initial="hidden"
      animate="visible"
      className="social-container"
    >
      <i class="fab fa-facebook"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-youtube"></i>
      <i class="fab fa-twitter"></i>
    </motion.div>
  );
};

export default Social;
