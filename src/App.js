import "./scss/main.scss";
import carrousalOne from "./images/carrousal-one.jpg";
import carrousalTwo from "./images/carrousal-two.jpg";
import carrousalThree from "./images/carrousal-three.jpg";
import Header from "./components/Header";
import Content from "./components/Content";
import Slider from "./components/Slider";
import Social from "./components/Social";
import Play from "./components/Play";
import Hamburger from "./components/Hamburger";
import { useState } from "react";

function App() {
  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  const text = [
    {
      heading: "creative design",
      imgSrc: { carrousalOne },
    },
    {
      heading: "creative design2",
      imgSrc: { carrousalTwo },
    },
    {
      heading: "creative design3",
      imgSrc: { carrousalThree },
    },
  ];
  return (
    <div className="App">
      <div className="overlay"></div>
      <Header hamburger={hamburger} toggleHamburger={toggleHamburger} />
      <div className="slides-container">
        <Content />
        <Slider />
        <Social />
      </div>
      <Play />
      <Hamburger hamburger={hamburger} />
    </div>
  );
}

export default App;
