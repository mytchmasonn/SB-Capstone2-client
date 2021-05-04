import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/html8pdf/components/Badge/badgeStyle";
const useStyles = makeStyles(styles);

export default function Badge(props) {
  const { color, children, className } = props;
  const classes = useStyles();
  const badgeClasses = classNames({
    [classes.badge]: true,
    [classes[color]]: true,
    [className]: className !== undefined,
  });
  return <span className={badgeClasses}>{children}</span>;
}

Badge.defaultProps = {
  color: "gray",
};

Badge.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
    "transparent",
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
};
