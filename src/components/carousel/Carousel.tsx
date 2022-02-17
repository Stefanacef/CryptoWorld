import "../../assets/styles/Carousel/Carousel.css";
import React, { FC } from "react";
type Props = {
  children?: JSX.Element[];
};
const Carousel: FC<Props> = ({ children }) => {
  return <div className="carousel">{children}</div>;
};

export default Carousel;
