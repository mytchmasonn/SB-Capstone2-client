import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Context as ThemeContext } from "context/ThemeContext";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";

import image from "assets/img/backgrounds/bg5.webp";

import LoginPage from "views/Login/Login";
import SignUpPage from "views/Signup/Signup";

import {
  lightStyles,
  darkStyles,
} from "assets/jss/html8pdf/views/AuthPages/authPagesStyle";
const useLightStyles = makeStyles(lightStyles);
const useDarkStyles = makeStyles(darkStyles);

export default function AuthPagesLayout() {
  const { state }: any = useContext(ThemeContext);
  const classes = state.theme === "dark" ? useDarkStyles() : useLightStyles();
  return (
    <div>
      <Header
        absolute={true}
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
        {location.pathname === "/login" ? (
          <LoginPage classes={classes} />
        ) : (
          <SignUpPage classes={classes} />
        )}
      </div>
    </div>
  );
}
