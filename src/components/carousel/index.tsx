import React from "react";
import { UncontrolledCarousel } from "reactstrap";

import "./style.scss";
import img1 from "../../assets/images/c1.jpg";
import img2 from "../../assets/images/c2.jpg";
import img3 from "../../assets/images/c3.jpg";

const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: img3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const CarouselCustom: React.FC = () => (
  <UncontrolledCarousel
    items={items}
  />
);

export default CarouselCustom;
