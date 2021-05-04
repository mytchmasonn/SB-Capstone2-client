import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import { Context as ThemeContext } from "context/ThemeContext";

import { MdCheck, MdClear } from "react-icons/md";

import { Input, InputLabel, FormControl } from "@material-ui/core";

import {
  lightStyles,
  darkStyles,
} from "assets/jss/html8pdf/components/CustomInputs/customInputStyle";
const useLightStyles = makeStyles(lightStyles);
const useDarkStyles = makeStyles(darkStyles);

export default function CustomInput(props) {
  const { state }: any = useContext(ThemeContext);
  const classes = state.theme === "dark" ? useDarkStyles() : useLightStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
  } = props;
  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  let newInputProps = {
    maxLength: inputProps ? inputProps.maxLength : undefined,
    minLength: inputProps ? inputProps.minLength : undefined,
  };
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + " " + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
        inputProps={newInputProps}
      />
      {error ? (
        <MdClear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <MdCheck
          className={classes.feedback + " " + classes.labelRootSuccess}
        />
      ) : null}
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
};
