import React, { RefObject, createRef, useEffect, useState } from "react";
import { animals, icons } from "../../assets";
import { FaArrowRight } from "react-icons/fa";
import "./index.scss";

const ImageSlider = () => {
  const [imageSlide, setImageSlide] = useState(0);
  const [count, setCount] = useState(0);
  const keys: Array<keyof typeof animals> = Object.keys(animals) as Array<
    keyof typeof animals
  >;
  const divRef: RefObject<HTMLDivElement> = createRef();

  const timer = setTimeout(() => {
    scrollRight("right");
  }, 3000);

  const scrollRight = (direction: string) => {
    setCount(count + 1);

    if (direction === "right" && divRef.current) {
      const imageWidth = divRef.current.offsetWidth;
      const scrollAmount = imageWidth * 1;
      divRef.current.scrollLeft += scrollAmount;
    }
    if (count >= keys.length - 1) {
      setCount(0);
      if (divRef.current) {
        divRef.current.scrollLeft = 0;
      }
    }
  };
  return (
    //carousel
    <div className="image_slider" ref={divRef}>
      {keys.map((image) => {
        return <img key={image} src={animals[image]} alt="pets" />;
      })}
      <div className="image_slider-dots">
        {keys.map((key) => (
          <icons.GoDotFill key={key} color={"white"} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
