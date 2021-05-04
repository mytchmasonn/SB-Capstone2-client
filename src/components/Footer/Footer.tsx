import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import { Context as ThemeContext } from "context/ThemeContext";

import { List, ListItem } from "@material-ui/core";

import {
  lightStyles,
  darkStyles,
} from "assets/jss/html8pdf/components/Footer/footerStyle";
const useLightStyles = makeStyles(lightStyles);
const useDarkStyles = makeStyles(darkStyles);

export default function Footer(props) {
  const { children, theme, big, className } = props;
  const { state }: any = useContext(ThemeContext);
  const classes = state.theme === "dark" ? useDarkStyles() : useLightStyles();
  const themeType =
    theme === "transparent" || theme === undefined ? false : true;

  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined,
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        {children !== undefined ? (
          <div>
            <div className={classes.content}>{children}</div>
            <hr />
          </div>
        ) : (
          " "
        )}
        <div>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a className={classes.block}>HTML8PDF</a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>&copy; 2021, html8pdf</div>
        </div>
        <div className={classes.clearFix} />
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.oneOf(["dark", "white", "transparent"]),
  big: PropTypes.bool,
  className: PropTypes.any,
};
