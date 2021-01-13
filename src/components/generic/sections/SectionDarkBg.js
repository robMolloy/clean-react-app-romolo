import React from "react";
import SectionRepeatImgBg from "./SectionRepeatImgBg";

const SectionDarkBg = (props = {}) => {
  let children;
  ({ children, ...props } = props);

  return (
    <SectionRepeatImgBg bg="media/home-banner-bg.jpg" {...props}>
      {children}
    </SectionRepeatImgBg>
  );
};

export default SectionDarkBg;
