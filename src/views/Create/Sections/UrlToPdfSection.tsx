import React, { useState, useEffect } from "react";
import baxios from "lib/baxios";

import useWindowSize from "lib/hooks/useWindowSize";
import useFormatParser from "lib/hooks/useFormatParser";
import useCreateFormValidation from "lib/hooks/useCreateFormValidation";

import { MdLink, MdExpandMore } from "react-icons/md";

import { InputAdornment } from "@material-ui/core";

import Badge from "components/Badge/Badge";
import Button from "components/CustomButtons/Button";
import CardBody from "components/Card/CardBody";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import GridContainer from "components/Grid/GridContainer";

import ShowSuccess from "./ShowSuccess";
import AdvancedOptions from "./AdvancedOptions";
import ConversionLoading from "./ConversionLoading";

export default function UrlToPdfSection({ user, classes }) {
  // ================================= //
  const { width } = useWindowSize();
  // ================================= //
  const [isUrl, setIsUrl] = useState("");
  // ================================= //
  const [isPdfFormat, setIsPdfFormat] = useState(8);
  const [openOptions, setOpenOptions] = useState(false);
  const [isPageLandscape, setIsPageLandscape] = useState(0);
  const [checkedBackground, setCheckedBackground] = useState(false);
  // ================================= //
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [linkToDownload, setLinkToDownload] = useState("");
  // ================================= //
  const pdfFormatParsed = useFormatParser(isPdfFormat);
  const isLandscape = isPageLandscape === 0 ? false : true;
  const { allFieldsValid } = useCreateFormValidation(isUrl);
  // ================================= //
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await baxios.post("/convert/convert-url", {
        convertUrl: isUrl,
        pdfFormat: pdfFormatParsed,
        withBackground: checkedBackground,
        orientation: isLandscape,
        userId: user.id,
      });
      setErrorMsg("");
      setLinkToDownload(res.data.targetName);
    } catch (err) {
      setIsLoading(false);
      setIsSuccess(false);
      setErrorMsg(err);
    }
  };

  useEffect(() => {
    if (linkToDownload.length > 2) {
      setIsLoading(false);
      setIsSuccess(true);
    }
  }, [linkToDownload]);

  const handleConvertAgain = () => {
    setIsUrl("");
    setErrorMsg("");
    setIsPdfFormat(8);
    setIsLoading(false);
    setIsSuccess(false);
    setLinkToDownload("");
    setOpenOptions(false);
    setIsPageLandscape(0);
    setCheckedBackground(false);
  };

  return (
    <React.Fragment>
      {isSuccess ? (
        <ShowSuccess
          classes={classes}
          linkToDownload={linkToDownload}
          handleConvertAgain={handleConvertAgain}
        />
      ) : (
        <React.Fragment>
          <h2 className={classes.cardTitle}>URL to PDF</h2>
          <CardBody className={classes.cardBodyMod}>
            <React.Fragment>
              {isLoading ? (
                <ConversionLoading classes={classes} />
              ) : (
                <React.Fragment>
                  <GridContainer justify="center">
                    {errorMsg.length > 3 ? (
                      <div>
                        <Badge color="danger">{errorMsg}</Badge>
                      </div>
                    ) : (
                      <div>
                        <Badge color="transparent"> </Badge>
                      </div>
                    )}
                    <GridItem xs={12} sm={12} md={12}>
                      <form className={classes.form} onSubmit={handleSubmit}>
                        <CustomInput
                          labelText="URL to Convert to PDF"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MdLink
                                  size={22}
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            ),

                            placeholder: "https://example.com",
                            type: "text",
                            value: isUrl,
                            onChange: (
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => setIsUrl(e.currentTarget.value),
                          }}
                        />
                        <div
                          className={classes.optionsContainer}
                          onClick={() => setOpenOptions(!openOptions)}
                        >
                          <span className={classes.optionsText}>
                            Advanced Options
                          </span>
                          <span
                            className={
                              openOptions
                                ? classes.optionsTextIconFlipped
                                : classes.optionsTextIcon
                            }
                          >
                            <MdExpandMore size={22} />
                          </span>
                        </div>
                        <AdvancedOptions
                          classes={classes}
                          openOptions={openOptions}
                          isPdfFormat={isPdfFormat}
                          isPageLandscape={isPageLandscape}
                          checkedBackground={checkedBackground}
                          setIsPdfFormat={setIsPdfFormat}
                          setIsPageLandscape={setIsPageLandscape}
                          setCheckedBackground={setCheckedBackground}
                        />

                        {width < 601 ? (
                          <div style={{ padding: "10px 0" }}></div>
                        ) : null}
                        <div className={classes.textCenter}>
                          <Button
                            round
                            disabled={!allFieldsValid}
                            color={allFieldsValid ? "primary" : "none"}
                            onClick={handleSubmit}
                          >
                            Submit
                          </Button>
                        </div>
                      </form>
                    </GridItem>
                  </GridContainer>
                </React.Fragment>
              )}
            </React.Fragment>
          </CardBody>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
