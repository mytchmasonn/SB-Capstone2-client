import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Button, { ButtonProps } from "@material-ui/core/Button";

import styles from "assets/jss/html8pdf/components/CustomButtons/buttonStyle";

const useStyles = makeStyles(styles);

interface CustomButtonProps extends ButtonProps {
  color?: string | any;
  round?: boolean;
  size?: any;
  link?: boolean;
  block?: boolean;
  simple?: boolean;
  justIcon?: boolean;
  fileButton?: boolean;
  className?: any;
}

const RegularButton = (props: CustomButtonProps) => {
  const {
    color,
    round,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    fileButton,
    className,
    children,
    style,
    ...rest
  } = props;
  const classes = useStyles();
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [classes.fileButton]: fileButton,
    [className]: className,
  });
  return (
    <Button {...rest} className={btnClasses} style={{ ...style }}>
      {children}
    </Button>
  );
};

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "none",
    "transparent",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  fileButton: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.any,
};

export default RegularButton;
