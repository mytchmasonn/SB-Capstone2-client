import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import { Context as ThemeContext } from "context/ThemeContext";

import { Tab, Tabs, Grow } from "@material-ui/core";

import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";

import {
  lightStyles,
  darkStyles,
} from "assets/jss/html8pdf/components/CustomTabs/customTabsStyle";
const useLightStyles = makeStyles(lightStyles);
const useDarkStyles = makeStyles(darkStyles);

export default function CustomTabs(props) {
  const { headerColor, title, tabs } = props;
  const { state }: any = useContext(ThemeContext);
  const classes = state.theme === "dark" ? useDarkStyles() : useLightStyles();

  const [value, setValue] = useState(0);

  const cardTitle = classNames({ [classes.cardTitle]: true });
  const tabsContainer = classNames({ [classes.tabsContainer]: true });

  return (
    <Card>
      <CardHeader color={headerColor}>
        {title !== undefined ? (
          <div className={cardTitle}>{"title"}</div>
        ) : null}
        <Tabs
          classes={{
            root: classes.customTabsRoot,
            flexContainer: tabsContainer,
            indicator: classes.displayNone,
          }}
          textColor="inherit"
          value={value}
          onChange={(e, value) => setValue(value)}
        >
          {tabs.map((prop, key) => {
            var icon = {};
            if (prop.tabIcon !== undefined) {
              icon = { icon: <prop.tabIcon className={classes.tabIcon} /> };
            } else {
              icon = {};
            }
            return (
              <Tab
                key={key}
                classes={{
                  root: classes.customTabRoot,
                  selected: classes.customTabSelected,
                  wrapper: classes.customTabWrapper,
                }}
                {...icon}
                label={prop.tabName}
              />
            );
          })}
        </Tabs>
      </CardHeader>
      <CardBody>
        {tabs.map((prop, key) => {
          if (key === value) {
            return (
              <div key={key}>
                <Grow key={key + 1} in={key === value} timeout={300}>
                  <div key={key + 2}>{prop.tabContent}</div>
                </Grow>
              </div>
            );
          }
          return null;
        })}
      </CardBody>
    </Card>
  );
}

CustomTabs.defaultProps = {
  headerColor: "primary",
};

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
    "transparent",
    "darker",
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.any,
      tabContent: PropTypes.node.isRequired,
    })
  ),
  plainTabs: PropTypes.bool,
};
