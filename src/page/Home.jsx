import React from "react";
import Slide from "../components/home/carousel/Slide";
import Carousel from "../components/home/carousel/Carousel";
import InfoRow from "../components/home/infoRow/InfoRow";

function Home() {
  return (
    <div>
      <Carousel />
      <InfoRow
        src="/images/01.jpg"
        title="About Us"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ab! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ab! Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      />
      <InfoRow
        src="/images/03.jpg"
        title="Our Journey"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ab! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, ab! Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        contentFirst
      />
    </div>
  );
}

export default Home;
