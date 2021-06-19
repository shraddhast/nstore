import React from "react";
import Carousels from "react-material-ui-carousel";

import items from "./CarouselData";

function Carousel() {
  const newItems = items.map((item) => (
    <img
      height="300px"
      style={{ marginTop: "50px" }}
      src={item.img}
      width="100%"
    />
  ));

  return (
    <div>
      <Carousels>{newItems}</Carousels>
    </div>
  );
}

export default Carousel;
