import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, makeStyles, createStyles } from "@material-ui/core";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";

const styles = createStyles({
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    zIndex: 3,
  },
  circle: {
    stroke: "url(#linearColors)",
  },
  progress: {
    display: "flex",
    justifyContent: "center",
  },
});

const useStyles = makeStyles(styles);
export default function LoadingSpinner(props) {
  const {
    topPad,
    colorPrimary,
    colorSecondary,
    circleThickness,
    circleSize,
  } = props;
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <div
          className={classes.loadingContainer}
          style={{ paddingTop: topPad }}
        >
          <svg width="0" height="0">
            <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
              <stop offset="20%" stopColor={colorPrimary} />
              <stop offset="90%" stopColor={colorSecondary} />
            </linearGradient>
          </svg>
          <CircularProgress
            thickness={circleThickness}
            size={circleSize}
            classes={{ circle: classes.circle }}
          />
        </div>
      </GridItem>
    </GridContainer>
  );
}

LoadingSpinner.defaultProps = {
  topPad: "20px",
  colorPrimary: "#39F",
  colorSecondary: "#F3F",
  circleThickness: 5,
  circleSize: 60,
};

LoadingSpinner.propTypes = {
  topPad: PropTypes.string,
  colorPrimary: PropTypes.string,
  colorSecondary: PropTypes.string,
  circleThickness: PropTypes.number,
  circleSize: PropTypes.number,
};
