import React from "react";
import "../scss/play.scss";

const Play = (props) => {
  const nextSlide = props.nextSlide;
  return (
    <footer className="play-container">
      <button onClick={nextSlide}>
        <i class="far fa-play-circle"></i>
      </button>
    </footer>
  );
};

export default Play;
