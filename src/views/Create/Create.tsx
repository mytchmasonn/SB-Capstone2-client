import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Context as ThemeContext } from "context/ThemeContext";

import useWindowSize from "lib/hooks/useWindowSize";
import useCurrentUser from "lib/hooks/useCurrentUser";

import { MdLink } from "react-icons/md";
import { VscFileCode } from "react-icons/vsc";

import Header from "components/Header/Header";
import GridItem from "components/Grid/GridItem";
import CustomTabs from "components/CustomTabs/CustomTabs";
import HeaderLinks from "components/Header/HeaderLinks";
import GridContainer from "components/Grid/GridContainer";

import image from "assets/img/backgrounds/bg5.webp";

import UrlToPdfSection from "./Sections/UrlToPdfSection";
import FileToPdfSection from "./Sections/FileToPdfSection";

import {
  lightStyles,
  darkStyles,
} from "assets/jss/html8pdf/views/Create/createPageStyle";
const useLightStyles = makeStyles(lightStyles);
const useDarkStyles = makeStyles(darkStyles);

const CreatePage = ({ currentUser }) => {
  const { state }: any = useContext(ThemeContext);
  const classes = state.theme === "dark" ? useDarkStyles() : useLightStyles();
  const { width } = useWindowSize();
  // ================================= //
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
        <div
          className={
            width < 601 ? classes.containerNoFlexM : classes.containerNoFlex
          }
        >
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={8}>
              <CustomTabs
                headerColor={state.theme === "dark" ? "primary" : "darker"}
                plainTabs
                tabs={[
                  {
                    tabName: "URL",
                    tabIcon: MdLink,
                    tabContent: (
                      <UrlToPdfSection classes={classes} user={currentUser} />
                    ),
                  },
                  {
                    tabName: "File",
                    tabIcon: VscFileCode,
                    tabContent: (
                      <FileToPdfSection classes={classes} user={currentUser} />
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default function CreateRender() {
  const [currentUser] = useCurrentUser();
  return (
    <React.Fragment>
      {currentUser === "noToken" ? (
        <Redirect to="/login" />
      ) : (
        <CreatePage currentUser={currentUser} />
      )}
    </React.Fragment>
  );
}
