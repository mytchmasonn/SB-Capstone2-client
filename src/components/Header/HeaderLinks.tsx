import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import { Context as ThemeContext } from "context/ThemeContext";

import { FaMoon } from "react-icons/fa";
import { HiOutlineSun } from "react-icons/hi";
import { MdAccountBox, MdExitToApp, MdContentCopy } from "react-icons/md";

import { List, ListItem } from "@material-ui/core";

import Button from "components/CustomButtons/Button";

import {
  lightStyles,
  darkStyles,
} from "assets/jss/html8pdf/components/Header/headerLinksStyle";
const useLightStyles = makeStyles(lightStyles);
const useDarkStyles = makeStyles(darkStyles);

export default function HeaderLinks(props) {
  const { state, lightTheme, darkTheme }: any = useContext(ThemeContext);
  const classes = state.theme === "dark" ? useDarkStyles() : useLightStyles();
  //
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const isToken = sessionStorage.getItem("token");
    if (isToken) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, []);
  //

  const handleSignout = () => {
    sessionStorage.removeItem("token");
    location.replace("/");
  };
  //

  const [checked, setChecked] = useState(false);
  const handleThemeToggle = () => {
    if (checked) {
      setChecked(false);
      lightTheme();
    } else {
      setChecked(true);
      darkTheme();
    }
  };

  const [noThemeButton, setNoThemeButton] = useState(false);
  useEffect(() => {
    const routes = new Set([
      "/account",
      "/create",
      "/landing",
      "/login",
      "/register",
      "/",
    ]);
    if (routes.has(location.pathname)) {
      setNoThemeButton(false);
    } else {
      setNoThemeButton(true);
    }
  }, [location.pathname]);

  return (
    <React.Fragment>
      <List className={classes.list + " " + classes.mlAuto}>
        <ListItem className={classes.listItem}>
          <br />
          <br />
        </ListItem>
        {noThemeButton ? null : (
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"
              className={classes.navLink}
              onClick={handleThemeToggle}
            >
              {state.theme === "dark" ? (
                <div>
                  <FaMoon size={22} className={classes.icons} /> Theme
                </div>
              ) : (
                <div>
                  <HiOutlineSun size={22} className={classes.icons} /> Theme
                </div>
              )}
            </Button>
          </ListItem>
        )}
        {isUser ? (
          <React.Fragment>
            <ListItem className={classes.listItem}>
              <Link to="/create">
                <Button color="transparent" className={classes.navLink}>
                  <MdContentCopy size={22} className={classes.icons} /> Create
                </Button>
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="/account">
                <Button color="transparent" className={classes.navLink}>
                  <MdAccountBox size={22} className={classes.icons} /> My
                  Account
                </Button>
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <div onClick={handleSignout}>
                <Button color="transparent" className={classes.navLink}>
                  <MdExitToApp size={22} className={classes.icons} /> Logout
                </Button>
              </div>
            </ListItem>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <ListItem className={classes.listItem}>
              <div
                style={{ color: "transparent", backgroundColor: "transparent" }}
              >
                .
                <br />
                <br />
              </div>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="/login">
                <Button color="transparent" className={classes.navLink}>
                  <MdAccountBox size={22} className={classes.icons} /> Login
                </Button>
              </Link>
            </ListItem>
          </React.Fragment>
        )}
      </List>
    </React.Fragment>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
