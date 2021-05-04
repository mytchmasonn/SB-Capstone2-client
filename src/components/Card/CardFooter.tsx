import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/html8pdf/components/Card/cardFooterStyle";

const useStyles = makeStyles(styles);

export default function CardFooter(props) {
  const {
    className,
    children,
    plain,
    profile,
    pricing,
    testimonial,
    ...rest
  } = props;
  const classes = useStyles();
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [className]: className !== undefined,
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  pricing: PropTypes.bool,
  testimonial: PropTypes.bool,
  children: PropTypes.node,
};
