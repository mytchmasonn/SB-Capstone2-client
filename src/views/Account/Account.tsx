import React, { useState, useEffect, useContext } from "react";
import baxios from "lib/baxios";
import { makeStyles } from "@material-ui/core/styles";

import { Context as ThemeContext } from "context/ThemeContext";

import useCurrentUser from "lib/hooks/useCurrentUser";

import { CircularProgress } from "@material-ui/core";

import Card from "components/Card/Card";
import Badge from "components/Badge/Badge";
import Header from "components/Header/Header";
import Button from "components/CustomButtons/Button";
import CardBody from "components/Card/CardBody";
import GridItem from "components/Grid/GridItem";
import HeaderLinks from "components/Header/HeaderLinks";
import GridContainer from "components/Grid/GridContainer";

import FileList from "views/Account/Sections/FileList";
import FileListSkeleton from "views/Account/Sections/FileListSkeleton";

import image from "assets/img/backgrounds/bg5.webp";
import {
  lightStyles,
  darkStyles,
} from "assets/jss/html8pdf/views/Account/accountPageStyle";
const useLightStyles = makeStyles(lightStyles);
const useDarkStyles = makeStyles(darkStyles);

function AccountPage({ user }) {
  const { state }: any = useContext(ThemeContext);
  const classes = state.theme === "dark" ? useDarkStyles() : useLightStyles();
  // ===================================================//
  const [isFiles, setIsFiles]: any = useState([]);
  const [filesLoaded, setFilesLoaded] = useState(false);
  const [userHasFiles, setUserHasFiles] = useState(false);
  // ===================================================//
  const getFileList = async () => {
    const { data } = await baxios.post("/files/get-file-list", {
      userId: user.id,
    });
    setIsFiles(data);
  };
  useEffect(() => {
    if (user) {
      if (user.id) {
        getFileList();
      }
    }
  }, [user]);

  useEffect(() => {
    if (isFiles && isFiles.length > 0) {
      setFilesLoaded(true);
      setUserHasFiles(true);
    } else {
      setFilesLoaded(false);
      setUserHasFiles(false);
    }
  }, [isFiles]);
  console.log(filesLoaded);
  // ===================================================//
  const [isLoadingEmail, setIsLoadingEmail] = useState(false);
  const [isSuccessEmail, setIsSuccessEmail] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorMsg, setIsErrorMsg] = useState(false);

  const sendVerificationEmail = async () => {
    setIsLoadingEmail(true);
    const res = await baxios.post("/verify/email", {
      id: user.id,
      email: user.email,
    });
    if (res.status === 200) {
      setIsLoadingEmail(false);
      setIsSuccessEmail(true);
      setIsErrorEmail(false);
    } else {
      setIsLoadingEmail(false);
      setIsSuccessEmail(false);
      setIsErrorEmail(true);
      setIsErrorMsg(res.data);
    }
  };
  // ===================================================//

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
        <div className={classes.containerNoFlex}>
          <Card className={classes.cardWrapper}>
            {user ? (
              <CardBody>
                <h2 style={{ textAlign: "center" }}>My Account</h2>
                <GridContainer justify="center">
                  <GridItem xs={12}>
                    <GridContainer>
                      <GridItem xs={7} sm={8}>
                        <span
                          className={classes.tableHeaderText}
                          style={{ paddingLeft: "10px" }}
                        >
                          File Name
                        </span>
                      </GridItem>
                      <GridItem xs={5} sm={4}>
                        <div style={{ textAlign: "center" }}>
                          <span className={classes.tableHeaderText}>
                            File Date
                          </span>
                        </div>
                      </GridItem>
                    </GridContainer>
                    <div className={classes.fileBarContainer}>
                      {filesLoaded ? (
                        isFiles.map((file: any, idx: number) => (
                          <FileList
                            key={file.id}
                            classes={classes}
                            file={file}
                            firstFile={isFiles[0].id}
                            lastFile={isFiles[isFiles.length - 1].id}
                            filePosition={idx}
                          />
                        ))
                      ) : userHasFiles ? (
                        <React.Fragment>
                          <FileListSkeleton classes={classes} />
                        </React.Fragment>
                      ) : null}
                    </div>
                  </GridItem>
                </GridContainer>
                {user.email_verified === "true" ? null : (
                  <React.Fragment>
                    {isLoadingEmail ? (
                      <div>
                        <CircularProgress />
                      </div>
                    ) : (
                      <React.Fragment>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "20px",
                          }}
                        >
                          {isErrorEmail ? (
                            <Badge color="danger">
                              <span className={classes.emailNotVerifiedText}>
                                Something went wrong...
                              </span>
                            </Badge>
                          ) : null}
                          {isSuccessEmail ? (
                            <Badge color="success">
                              <span className={classes.emailNotVerifiedText}>
                                Email Sent!
                              </span>
                            </Badge>
                          ) : (
                            <Badge color="warning">
                              <span className={classes.emailNotVerifiedText}>
                                Email not verified
                              </span>
                            </Badge>
                          )}
                        </div>

                        <div
                          className={classes.needNewVerificationEmailContainer}
                        >
                          {isSuccessEmail ? null : (
                            <Button simple>
                              <span
                                className={classes.needNewVerificationEmail}
                                onClick={sendVerificationEmail}
                              >
                                Need a new verification email?
                              </span>
                            </Button>
                          )}
                        </div>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                )}
              </CardBody>
            ) : (
              <div>
                <h2 style={{ textAlign: "center" }}>Please Login</h2>
              </div>
            )}
            <br />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function Account() {
  const [user] = useCurrentUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <React.Fragment>
      {mounted ? <AccountPage user={user} /> : null}
    </React.Fragment>
  );
}
