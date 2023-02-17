import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

export const Slider = () => {
  const images = [{ url: "assets/hotel.jpg" }, { url: "assets/pexel.jpg" }, { url: "assets/pex.jpg" }];
  return (
    <div>
      <SimpleImageSlider width="35%" height={650} images={images} showBullets={true} showNavs={false} autoPlay={true} bgColor="#fff" slideDuration={2} />
    </div>
  );
};
