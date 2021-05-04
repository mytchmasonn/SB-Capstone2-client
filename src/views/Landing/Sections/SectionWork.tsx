import React, { useState, useEffect } from "react";
import baxios from "lib/baxios";

import { CircularProgress } from "@material-ui/core";

import Badge from "components/Badge/Badge";
import Button from "components/CustomButtons/Button";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import GridContainer from "components/Grid/GridContainer";

export default function SectionWork({ classes }) {
  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isMessage, setIsMessage] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [allValid, setAllValid] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isEmail.length > 5) {
      if (isEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    } else {
      setEmailValid(false);
    }
  }, [isEmail]);

  useEffect(() => {
    if (isName.length > 3) {
      if (isMessage.length > 5) {
        if (emailValid) {
          setAllValid(true);
        } else {
          setAllValid(false);
        }
      } else {
        setAllValid(false);
      }
    } else {
      setAllValid(false);
    }
  }, [isName, isMessage, emailValid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await baxios.post("/misc/contact-us", {
        name: isName,
        email: isEmail,
        message: isMessage,
      });
      setErrorMsg("");
      setIsSuccess(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setErrorMsg(err);

      setIsSuccess(true);

      setIsLoading(false);
    }
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Questions?</h2>
          <h4 className={classes.description}>
            Feel free to contact us if you have any questions or concerns.
            <br />
            <br />
            We'll typically reply within 24-48 business hours.
          </h4>
          {isSuccess ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Badge color="success">Sent!</Badge>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Badge color="transparent"></Badge>
            </div>
          )}
          <form onSubmit={handleSubmit}>
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
              <React.Fragment>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <CustomInput
                      labelText="Your Name"
                      formControlProps={{ fullWidth: true }}
                      inputProps={{
                        type: "text",
                        value: isName,
                        onChange: (e) => setIsName(e.currentTarget.value),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <CustomInput
                      labelText="Your Email"
                      formControlProps={{ fullWidth: true }}
                      inputProps={{
                        type: "text",
                        value: isEmail,
                        onChange: (e) => setIsEmail(e.currentTarget.value),
                      }}
                    />
                  </GridItem>
                  <CustomInput
                    labelText="Your Message"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.textArea,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      type: "text",
                      value: isMessage,
                      onChange: (e) => setIsMessage(e.currentTarget.value),
                    }}
                  />
                  <GridItem
                    xs={12}
                    sm={4}
                    md={4}
                    className={classes.mrAuto + " " + classes.mlAuto}
                  >
                    <Button
                      disabled={!allValid}
                      type="submit"
                      color={allValid ? "primary" : "none"}
                    >
                      Send Message
                    </Button>
                  </GridItem>
                </GridContainer>
              </React.Fragment>
            )}
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
