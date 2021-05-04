import React, { useState } from "react";
import baxios from "lib/baxios";
import { Link, Redirect } from "react-router-dom";

import { useLoginValidation } from "lib/hooks/useAuthValidation";

import { MdLock, MdEmail } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";

import { InputAdornment } from "@material-ui/core";

import Card from "components/Card/Card";
import Badge from "components/Badge/Badge";
import Button from "components/CustomButtons/Button";
import CardBody from "components/Card/CardBody";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import GridContainer from "components/Grid/GridContainer";
import LoadingSpinner from "components/Loading/LoadingSpinner";

export default function LoginPage({ classes }) {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { emailValid, allValid } = useLoginValidation({ isEmail, isPassword });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await baxios.post("/auth/login", {
        email: isEmail,
        password: isPassword,
      });
      sessionStorage.setItem("token", data.token);
      setErrorMsg("");
      setIsSuccess(true);
    } catch (err) {
      setErrorMsg(err);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className={classes.containerNoFlex} style={{ paddingTop: "15vh" }}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={6} lg={4}>
            <Card className={classes.cardSignup}>
              <h2 className={classes.cardTitle}>
                {isLoading ? "Logging in..." : "Login"}
              </h2>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12}>
                      <Link to="/register">
                        <div className={classes.needAnAccountContainer}>
                          <span style={{ fontWeight: 400 }}>
                            Need an account?
                          </span>
                          <br />
                          <span className={classes.signupInsteadText}>
                            Sign Up
                          </span>
                        </div>
                      </Link>
                      <div className={classes.errorMessageContainer}>
                        {errorMsg.length > 5 ? (
                          <Badge color="danger">{errorMsg}</Badge>
                        ) : null}
                      </div>
                      <form className={classes.form} onSubmit={handleSubmit}>
                        <CustomInput
                          labelText="Email"
                          formControlProps={{ fullWidth: true }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MdEmail
                                  size={22}
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="start">
                                {!emailValid ? (
                                  <FaRegCheckCircle
                                    className={classes.inputIconsColor}
                                  />
                                ) : (
                                  <FaCheckCircle
                                    color="green"
                                    className={classes.inputIconsColor}
                                  />
                                )}
                              </InputAdornment>
                            ),
                            placeholder: "user@example.com",
                            type: "email",
                            value: isEmail,
                            onChange: (e) => setIsEmail(e.currentTarget.value),
                          }}
                        />
                        <CustomInput
                          labelText="Password"
                          formControlProps={{ fullWidth: true }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MdLock
                                  size={22}
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment
                                position="start"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <FiEyeOff
                                    size={18}
                                    className={classes.inputIconsColor}
                                  />
                                ) : (
                                  <FiEye
                                    size={18}
                                    className={classes.inputIconsColor}
                                  />
                                )}
                              </InputAdornment>
                            ),
                            placeholder: "Password",
                            type: showPassword ? "text" : "password",
                            autoComplete: "off",
                            value: isPassword,
                            onChange: (e) =>
                              setIsPassword(e.currentTarget.value),
                          }}
                        />
                        <div className={classes.submitButtonContainer}>
                          <Button
                            disabled={!allValid}
                            type="submit"
                            round
                            color={allValid ? "primary" : "none"}
                          >
                            Submit
                          </Button>
                        </div>
                      </form>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              )}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      {isSuccess ? <Redirect push to="/account" /> : null}
    </div>
  );
}
