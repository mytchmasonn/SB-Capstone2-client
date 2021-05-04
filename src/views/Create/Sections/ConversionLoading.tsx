import React from "react";

import { CircularProgress } from "@material-ui/core";

import Typist from "components/Typist/Typist";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";

export default function ConversionLoading({ classes }) {
  return (
    <GridContainer>
      <GridItem xs={12}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <svg width="0" height="0">
            <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
              <stop offset="20%" stopColor="#39F" />
              <stop offset="90%" stopColor="#F3F" />
            </linearGradient>
          </svg>
          <CircularProgress
            thickness={5}
            size={60}
            classes={{ circle: classes.circle }}
          />
        </div>
      </GridItem>
      <GridItem xs={12}>
        <div className={classes.loadingTextContainer}>
          <Typist>
            <span className={classes.loadingText}>
              This may take just a moment...
            </span>
          </Typist>
        </div>
      </GridItem>
    </GridContainer>
  );
}
