import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Icon from "@material-ui/core/Icon";

import { Context as ThemeContext } from "context/ThemeContext";
import {
  lightStyles,
  darkStyles,
} from "assets/jss/html8pdf/components/Info/infoStyle";
const useLightStyles = makeStyles(lightStyles);
const useDarkStyles = makeStyles(darkStyles);

export default function InfoArea(props) {
  const { title, description, iconColor, vertical, className } = props;
  const { state }: any = useContext(ThemeContext);
  const classes = state.theme === "dark" ? useDarkStyles() : useLightStyles();
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical,
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical,
  });
  const infoAreaClasses = classNames({
    [classes.infoArea]: true,
    [className]: className !== undefined,
  });
  let icon;
  switch (typeof props.icon) {
    case "string":
      icon = <Icon className={iconClasses}>{props.icon}</Icon>;
      break;
    default:
      icon = <props.icon className={iconClasses} />;
      break;
  }
  return (
    <div className={infoAreaClasses}>
      <div className={iconWrapper}>{icon}</div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray",
};

InfoArea.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  vertical: PropTypes.bool,
  className: PropTypes.string,
};
