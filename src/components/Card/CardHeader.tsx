import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import { Context as ThemeContext } from "context/ThemeContext";
import {
  lightStyles,
  darkStyles,
} from "assets/jss/html8pdf/components/Card/cardHeaderStyle";
const useLightStyles = makeStyles(lightStyles);
const useDarkStyles = makeStyles(darkStyles);

export default function CardHeader(props) {
  const {
    className,
    children,
    color,
    plain,
    image,
    contact,
    signup,
    noShadow,
    ...rest
  } = props;
  const { state }: any = useContext(ThemeContext);
  const classes = state.theme === "dark" ? useDarkStyles() : useLightStyles();
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignup]: signup,
    [classes.noShadow]: noShadow,
    [className]: className !== undefined,
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
    "transparent",
    "darker",
  ]),
  plain: PropTypes.bool,
  image: PropTypes.bool,
  contact: PropTypes.bool,
  signup: PropTypes.bool,
  noShadow: PropTypes.bool,
  children: PropTypes.node,
};
