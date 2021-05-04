import React, { useContext } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import { Context as ThemeContext } from "context/ThemeContext";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Parallax from "components/Parallax/Parallax";
import HeaderLinks from "components/Header/HeaderLinks";

import SectionMain from "./Sections/SectionMain";
import SectionWork from "./Sections/SectionWork";

import parallaxImage from "assets/img/backgrounds/bg1.webp";

import {
  lightStyles,
  darkStyles,
} from "assets/jss/html8pdf/views/Landing/landingPageStyle";
const useLightStyles = makeStyles(lightStyles);
const useDarkStyles = makeStyles(darkStyles);

export default function Landing() {
  const { state }: any = useContext(ThemeContext);
  const classes = state.theme === "dark" ? useDarkStyles() : useLightStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="HTML8PDF"
        links={<HeaderLinks />}
        fixed
        changeColorOnScroll={{ height: 200, color: "primary" }}
      />
      <Parallax sm image={parallaxImage} filter="darker">
        <div className={classes.parallaxTitleContainer}>
          <h2 className={classes.parallaxTitle}>
            {"<"}
            <span className={classes.parallaxTitleHtml}>{"HTML"}</span>
            {"/>"}
            <span className={classes.parallaxTitlePdf}>8</span>
            PDF
          </h2>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionMain classes={classes} />
          <SectionWork classes={classes} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
