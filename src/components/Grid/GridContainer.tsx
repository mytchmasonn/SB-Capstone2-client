import React from "react";
import PropTypes from "prop-types";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const styles = () =>
  createStyles({
    grid: { marginRight: "-15px", marginLeft: "-15px", width: "auto" },
  });

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: "",
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  justify: PropTypes.string,
};
