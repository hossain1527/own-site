import React from "react";
import imgHome from "../src/images/sammy2.png";
import Common from "./Common";

const Home = () => {
  return (
    <div>
      <Common
        name="This is all about coding"
        imgSrc={imgHome}
        btnName="Let's take a sneak"
        visit="/about"
        subName="A developer, designer and a code explorer 💻"
      />
    </div>
  );
};

export default Home;
