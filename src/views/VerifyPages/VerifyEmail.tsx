import React, { useState, useEffect } from "react";
import baxios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import { MdCheck } from "react-icons/md";

import { CircularProgress } from "@material-ui/core";

import Card from "components/Card/Card";
import Header from "components/Header/Header";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";

import image from "assets/img/backgrounds/bg2.webp";

import styles from "assets/jss/html8pdf/views/VerifyPages/verifyPagesStyle";
const useStyles = makeStyles(styles);

const VerifyEmailPage = ({ classes, isError }) => {
  return (
    <div>
      <Header absolute={true} color="transparent" brand="HTML8PDF" />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.containerNoFlex}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <Card plain>
                {isError ? (
                  <ErrorPage classes={classes} />
                ) : (
                  <SuccessPage classes={classes} />
                )}
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

const SuccessPage = ({ classes }) => {
  return (
    <GridContainer>
      <GridItem xs={12}>
        <div className={classes.textTitleContainer}>
          <h1>All Set!</h1>
        </div>

        <div className={classes.textSubtitleContainer}>
          <h3>Thanks!</h3>
        </div>
        <div className={classes.textTitleContainer}>
          <MdCheck size={200} color="#4caf50" />
        </div>
        <div className={classes.textSubtitleContainer}>
          <h4>You can now close this window.</h4>
        </div>
      </GridItem>
    </GridContainer>
  );
};
const ErrorPage = ({ classes }) => {
  return (
    <GridContainer>
      <GridItem xs={12}>
        <div className={classes.textTitleContainer}>
          <h1>Token may be expired.</h1>
        </div>
        <div className={classes.textSubtitleContainer}>
          <h4>You can request another from your account page.</h4>
        </div>
      </GridItem>
    </GridContainer>
  );
};

export default function VerifyEmail() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const isToken = new URLSearchParams(window.location.search).get("token");

  const classes = useStyles();
  const verifyUserEmail = async () => {
    try {
      await baxios.post("/verify/email-verify", {
        token: isToken,
      });
      setIsError(false);
      setIsSuccess(true);
    } catch (err) {
      console.log(err);
      setIsError(true);
      setIsSuccess(false);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    verifyUserEmail();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setIsLoading(false);
    }
  }, [isSuccess]);
  return (
    <React.Fragment>
      {isLoading ? (
        <div className={classes.loadingContactFormContainer}>
          <svg width="0" height="0">
            <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
              <stop offset="20%" stopColor="#39F" />
              <stop offset="90%" stopColor="#F3F" />
            </linearGradient>
          </svg>
          <CircularProgress
            thickness={5}
            size={80}
            classes={{ circle: classes.circle }}
          />
        </div>
      ) : (
        <VerifyEmailPage classes={classes} isError={isError} />
      )}
    </React.Fragment>
  );
}
