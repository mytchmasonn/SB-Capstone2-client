import React, { useState, useEffect } from "react";
import baxios from "lib/baxios";
import { Link, Redirect } from "react-router-dom";

import { useSignupValidation } from "lib/hooks/useAuthValidation";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
import { MdEmail, MdLock, MdPerson, MdCheck } from "react-icons/md";

import { Checkbox, InputAdornment, FormControlLabel } from "@material-ui/core";

import Card from "components/Card/Card";
import Footer from "components/Footer/Footer";
import Button from "components/CustomButtons/Button";
import CardBody from "components/Card/CardBody";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import GridContainer from "components/Grid/GridContainer";
import LoadingSpinner from "components/Loading/LoadingSpinner";

import TosDialog from "./Sections/TosDialog";

export default function SignUpPage({ classes }) {
  const [checked, setChecked] = useState(false);
  const [openTos, setOpenTos] = useState(false);
  // ================================= //
  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  // ================================= //
  const [showPassword, setShowPassword] = useState(false);
  // ================================= //
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  // ================================= //
  const [isReturnedUser, setIsReturnedUser]: any = useState(null);
  // ================================= //
  const {
    passwordLengthValid,
    passwordCapitalValid,
    passwordNumberValid,
    nameValid,
    emailValid,
    allValid,
  } = useSignupValidation({ isName, isEmail, isPassword, checked });
  // ================================= //

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await baxios.post("/auth/register", {
        name: isName,
        email: isEmail,
        password: isPassword,
      });
      setErrorMsg("");
      setIsReturnedUser(res.data.user);
      sessionStorage.setItem("token", res.data.token);
    } catch (err) {
      console.log(err);
      setErrorMsg("Incorrect email or password");
      setIsLoading(false);
      setIsSuccess(false);
    }
  };

  const sendVerificationEmail = async () => {
    await baxios.post("/verify/email", {
      id: isReturnedUser?.id,
      email: isReturnedUser?.email,
    });
    setIsSuccess(true);
  };
  useEffect(() => {
    if (isReturnedUser) {
      sendVerificationEmail();
    }
  }, [isReturnedUser]);

  return (
    <div>
      <div className={classes.containerNoFlex}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={10} md={6}>
            <Card className={classes.cardSignup}>
              <h2 className={classes.cardTitle}>
                {isLoading ? "Creating Account..." : "Register"}
              </h2>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                      <Link to="/login">
                        <div className={classes.needAnAccountContainer}>
                          <span style={{ fontWeight: 400 }}>
                            Already have an account?
                          </span>
                          <br />
                          <span className={classes.signupInsteadText}>
                            Login
                          </span>
                        </div>
                      </Link>
                      <form className={classes.form} onSubmit={handleSubmit}>
                        <CustomInput
                          labelText="Name"
                          formControlProps={{ fullWidth: true }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MdPerson
                                  size={22}
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="start">
                                {!nameValid ? (
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
                            placeholder: "Name...",
                            type: "text",
                            value: isName,
                            onChange: (e) => setIsName(e.currentTarget.value),
                          }}
                        />
                        <CustomInput
                          labelText="Email"
                          formControlProps={{
                            fullWidth: true,
                          }}
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
                            placeholder: "••••••••••",
                            type: showPassword ? "text" : "password",
                            autoComplete: "off",
                            value: isPassword,
                            onChange: (e) =>
                              setIsPassword(e.currentTarget.value),
                          }}
                        />
                        <GridContainer>
                          <GridItem>
                            {!passwordLengthValid ? (
                              <FaRegCheckCircle
                                color="#495057"
                                className={classes.inputIconsColor}
                              />
                            ) : (
                              <FaCheckCircle
                                color="green"
                                className={classes.inputIconsColor}
                              />
                            )}
                            <span className={classes.passwordValidLabelText}>
                              8+ Characters
                            </span>
                          </GridItem>
                          <GridItem>
                            {!passwordCapitalValid ? (
                              <FaRegCheckCircle
                                className={classes.inputIconsColor}
                                color="#495057"
                              />
                            ) : (
                              <FaCheckCircle
                                color="green"
                                className={classes.inputIconsColor}
                              />
                            )}
                            <span className={classes.passwordValidLabelText}>
                              1+ Capital Letter
                            </span>
                          </GridItem>
                          <GridItem>
                            {!passwordNumberValid ? (
                              <FaRegCheckCircle
                                color="#495057"
                                className={classes.inputIconsColor}
                              />
                            ) : (
                              <FaCheckCircle
                                color="green"
                                className={classes.inputIconsColor}
                              />
                            )}
                            <span className={classes.passwordValidLabelText}>
                              1+ Number/Special Character
                            </span>
                          </GridItem>
                        </GridContainer>
                        <FormControlLabel
                          classes={{
                            root: classes.formControlLabelRoot,
                          }}
                          label=""
                          control={
                            <Checkbox
                              onClick={() => setChecked(!checked)}
                              checkedIcon={
                                <MdCheck
                                  size={22}
                                  className={classes.checkedIcon}
                                />
                              }
                              icon={
                                <MdCheck
                                  size={22}
                                  className={classes.uncheckedIcon}
                                />
                              }
                              classes={{
                                checked: classes.checked,
                                root: classes.checkRoot,
                              }}
                              checked={checked}
                            />
                          }
                        />
                        <span className={classes.checkboxLabel}>
                          I agree to the
                        </span>
                        <span> </span>
                        <span
                          className={classes.checkboxLabelPlus}
                          onClick={() => setOpenTos(true)}
                        >
                          terms and conditions
                        </span>

                        <div className={classes.submitButtonContainer}>
                          <Button
                            round
                            color={allValid ? "primary" : "none"}
                            disabled={!allValid}
                            onClick={handleSubmit}
                          >
                            Get started
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
      <div style={{ position: "absolute", bottom: 0 }}>
        <Footer />
      </div>
      <TosDialog openTos={openTos} setOpenTos={setOpenTos} classes={classes} />
      <div>{isSuccess ? <Redirect to="/create" /> : null}</div>
    </div>
  );
}
