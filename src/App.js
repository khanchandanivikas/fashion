import "./scss/main.scss";
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

  const [activeSlide, setActiveSlide] = useState(0);
  const nextSlide = () => {
    setActiveSlide(activeSlide === text.length - 1 ? 0 : activeSlide + 1);
  };

  const text = [
    {
      heading: "creative design1",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quisquam aperiam vitae odio natus tenetur architecto, temporibus sapiente, minima eligendi reiciendis tempora autem laudantium adipisci harum. Temporibus explicabo enim placeat.",
      image:
        "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      heading: "creative design2",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quisquam aperiam vitae odio natus tenetur architecto, temporibus sapiente, minima eligendi reiciendis tempora autem laudantium adipisci harum. Temporibus explicabo enim placeat.",
      image:
        "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      heading: "creative design3",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quisquam aperiam vitae odio natus tenetur architecto, temporibus sapiente, minima eligendi reiciendis tempora autem laudantium adipisci harum. Temporibus explicabo enim placeat.",
      image:
        "https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  return (
    <div className="App">
      <Header hamburger={hamburger} toggleHamburger={toggleHamburger} />
      <div className="slides-container">
        <Content text={text} activeSlide={activeSlide} />
        <Slider text={text} activeSlide={activeSlide} />
        <Social />
      </div>
      <Play nextSlide={nextSlide} />
      <Hamburger hamburger={hamburger} />
    </div>
  );
}

export default App;
