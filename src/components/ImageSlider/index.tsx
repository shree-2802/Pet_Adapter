import { RefObject, createRef, useState } from "react";
import { icons } from "../../assets";
import "./index.scss";

export type animalsPropsType={ [name: string | number]: string };
export type imageSliderType = {
  animals: animalsPropsType
}
const ImageSlider = ({ animals }: imageSliderType) => {
  const [count, setCount] = useState(0);
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
    if (count >= Object.keys(animals).length - 1) {
      setCount(0);
      if (divRef.current) {
        divRef.current.scrollLeft = 0;
      }
    }
  };
  return (
    //carousel
    <div className="image_slider" ref={divRef}>
      {Object.keys(animals).map((image) => {
        return <img key={image} src={animals[image]} alt="pets" />;
      })}
      <div className="image_slider-dots">
        {Object.keys(animals).map((key) => (
          <icons.GoDotFill key={key} color={"white"} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
