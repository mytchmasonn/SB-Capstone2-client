import React from "react";

import Skeleton from "@material-ui/lab/Skeleton";

import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";

export default function FileListSkeleton({ classes }) {
  return (
    <React.Fragment>
      <div className={classes.fileBarDiv2Skeleton}>
        <GridContainer>
          <GridItem xs={7} sm={8}>
            <div className={classes.skeletonTitleContainer}>
              <Skeleton
                animation="wave"
                width="75%"
                height={30}
                classes={{
                  root: classes.skeletonRoot,
                  wave: classes.skeletonWave,
                }}
              />
            </div>
          </GridItem>
          <GridItem xs={5} sm={4}>
            <div className={classes.skeletonDateContainer}>
              <Skeleton
                animation="wave"
                width="40%"
                height={20}
                classes={{
                  root: classes.skeletonRoot,
                  wave: classes.skeletonWave,
                }}
              />
            </div>
            <div className={classes.skeletonTimeContainer}>
              <Skeleton
                animation="wave"
                width="30%"
                height={12}
                classes={{
                  root: classes.skeletonRoot,
                  wave: classes.skeletonWave,
                }}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.fileBarDiv1Skeleton}>
        <GridContainer>
          <GridItem xs={7} sm={8}>
            <div className={classes.skeletonTitleContainer}>
              <Skeleton
                animation="wave"
                width="40%"
                height={30}
                classes={{
                  root: classes.skeletonRoot,
                  wave: classes.skeletonWave,
                }}
              />
            </div>
          </GridItem>
          <GridItem xs={5} sm={4}>
            <div className={classes.skeletonDateContainer}>
              <Skeleton
                animation="wave"
                width="40%"
                height={20}
                classes={{
                  root: classes.skeletonRoot,
                  wave: classes.skeletonWave,
                }}
              />
            </div>
            <div className={classes.skeletonTimeContainer}>
              <Skeleton
                animation="wave"
                width="30%"
                height={12}
                classes={{
                  root: classes.skeletonRoot,
                  wave: classes.skeletonWave,
                }}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.fileBarDiv2Skeleton}>
        <GridContainer>
          <GridItem xs={7} sm={8}>
            <div className={classes.skeletonTitleContainer}>
              <Skeleton
                animation="wave"
                width="60%"
                height={30}
                classes={{
                  root: classes.skeletonRoot,
                  wave: classes.skeletonWave,
                }}
              />
            </div>
          </GridItem>
          <GridItem xs={5} sm={4}>
            <div className={classes.skeletonDateContainer}>
              <Skeleton
                animation="wave"
                width="40%"
                height={20}
                classes={{
                  root: classes.skeletonRoot,
                  wave: classes.skeletonWave,
                }}
              />
            </div>
            <div className={classes.skeletonTimeContainer}>
              <Skeleton
                animation="wave"
                width="30%"
                height={12}
                classes={{
                  root: classes.skeletonRoot,
                  wave: classes.skeletonWave,
                }}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </React.Fragment>
  );
}
