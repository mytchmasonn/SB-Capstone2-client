import React from "react";
import Slide from "@material-ui/core/Slide";
import { SlideProps } from "@material-ui/core";

const Transition = React.forwardRef<unknown, SlideProps>((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default Transition;
