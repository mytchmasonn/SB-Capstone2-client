import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import GridItem from "components/Grid/GridItem";
import HeaderLinks from "components/Header/HeaderLinks";
import GridContainer from "components/Grid/GridContainer";

import image from "assets/img/backgrounds/bg4.webp";

import styles from "assets/jss/html8pdf/views/ErrorPage/errorPageStyles";
const useStyles = makeStyles(styles);

export default function ErrorPage() {
  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="HTML8PDF"
        links={<HeaderLinks />}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h1 className={classes.title}>404</h1>
              <h2 className={classes.subTitle}>Page not found :(</h2>
              <h4 className={classes.description}>
                Oops! Looks like you got lost.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
