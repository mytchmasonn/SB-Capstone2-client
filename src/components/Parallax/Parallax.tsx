import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/html8pdf/components/Parallax/parallaxStyle";

const useStyles = makeStyles(styles);

export default function Parallax(props) {
  let windowScrollTop;

  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = useState(
    "translate3d(0," + windowScrollTop + "px,0)"
  );
  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const {
    filter,
    className,
    children,
    style,
    image,
    lg,
    md,
    sm,
    xs,
    xxs,
  } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes[filter + "Color"]]: filter !== undefined,
    [classes.lg]: lg,
    [classes.md]: md,
    [classes.sm]: sm,
    [classes.xs]: xs,
    [classes.xxs]: xxs,
    [className]: className !== undefined,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
        transform: transform,
      }}
    >
      {children}
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.oneOf([
    "primary",
    "rose",
    "dark",
    "darker",
    "info",
    "success",
    "warning",
    "danger",
  ]),
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.any,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  xxs: PropTypes.bool,
};
