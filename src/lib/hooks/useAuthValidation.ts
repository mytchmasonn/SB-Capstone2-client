import React, { useEffect, useState } from "react";

interface IuseSignupValidationProps {
  isName: string;
  isEmail: string;
  isPassword: string;
  checked: boolean;
}

interface IuseLoginValidationProps {
  isEmail: string;
  isPassword: string;
}

export const useSignupValidation = (props) => {
  const {
    isName,
    isEmail,
    isPassword,
    checked,
  }: IuseSignupValidationProps = props;
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordLengthValid, setPasswordLengthValid] = useState(false);
  const [passwordNumberValid, setPasswordNumberValid] = useState(false);
  const [passwordCapitalValid, setPasswordCapitalValid] = useState(false);
  // ================================= //
  const [allValid, setAllValid] = useState(false);
  // ================================= //

  useEffect(() => {
    if (isName.length > 2) {
      if (isName.match(/^[a-zA-Z]*$/)) {
        setNameValid(true);
      } else {
        setNameValid(false);
      }
    } else {
      setNameValid(false);
    }
  }, [isName]);

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
    if (isPassword.length >= 8) {
      setPasswordLengthValid(true);
    } else {
      setPasswordLengthValid(false);
    }
  }, [isPassword]);

  useEffect(() => {
    if (isPassword.match(/^(?=.*?[A-Z]).{1,}$/)) {
      setPasswordCapitalValid(true);
    } else {
      setPasswordCapitalValid(false);
    }
  }, [isPassword]);

  useEffect(() => {
    if (isPassword.match(/^(?=.*?[0-9]).{1,}$/)) {
      setPasswordNumberValid(true);
    } else {
      setPasswordNumberValid(false);
    }
  }, [isPassword]);

  useEffect(() => {
    if (nameValid) {
      if (emailValid) {
        if (passwordLengthValid) {
          if (passwordCapitalValid) {
            if (passwordNumberValid) {
              if (checked === true) {
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
        } else {
          setAllValid(false);
        }
      } else {
        setAllValid(false);
      }
    } else {
      setAllValid(false);
    }
  }, [
    nameValid,
    emailValid,
    passwordNumberValid,
    passwordCapitalValid,
    passwordLengthValid,
    checked,
  ]);

  return {
    allValid,
    passwordLengthValid,
    passwordCapitalValid,
    passwordNumberValid,
    nameValid,
    emailValid,
  };
};

export const useLoginValidation = (props) => {
  const { isEmail, isPassword }: IuseLoginValidationProps = props;
  const [emailValid, setEmailValid] = useState(false);
  const [allValid, setAllValid] = useState(false);

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
    if (emailValid && isPassword.length > 0) {
      setAllValid(true);
    } else {
      setAllValid(false);
    }
  }, [allValid, emailValid, isPassword]);

  return { emailValid, allValid };
};
