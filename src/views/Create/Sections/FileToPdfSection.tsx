import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import baxios from "lib/baxios";
import useFormatParser from "lib/hooks/useFormatParser";

import { MdExpandMore } from "react-icons/md";
import { VscFileCode, VscSymbolFile } from "react-icons/vsc";

import { Zoom } from "@material-ui/core";

import Badge from "components/Badge/Badge";
import Button from "components/CustomButtons/Button";
import CardBody from "components/Card/CardBody";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import HTMLInFileIcon from "components/Misc/HTMLInFileIcon";

import ShowSuccess from "./ShowSuccess";
import AdvancedOptions from "./AdvancedOptions";
import ConversionLoading from "./ConversionLoading";

export default function FileToPdfSection({ user, classes }) {
  // ================================= //
  const [openOptions, setOpenOptions] = useState(false);
  const [isPdfFormat, setIsPdfFormat] = useState(8);
  const [isPageLandscape, setIsPageLandscape] = useState(0);
  const [checkedBackground, setCheckedBackground]: any = useState(false);
  // ================================= //
  const [zoomInOut, setZoomInOut] = useState(false);
  const [zoomInOutAny, setZoomInOutAny] = useState(false);
  // ================================= //
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // ================================= //
  const pdfFormatParsed = useFormatParser(isPdfFormat);
  const isLandscape: any = isPageLandscape === 0 ? false : true;
  // ================================= //
  const [files, setFiles]: any = useState(null);
  const [fileNames, setFileNames] = useState("");
  // ================================= //
  const [allValid, setAllValid] = useState(false);
  // ================================= //
  const [linkToDownload, setLinkToDownload] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    let fileNames: string;
    let files = acceptedFiles[0];
    if (files) {
      fileNames = files.name;
      setFiles(files);
      setFileNames(fileNames);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  // ================================= //
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("fileKey", files);
    formData.append("fileNames", fileNames);
    formData.append("userId", user.id);
    formData.append("pdfFormat", pdfFormatParsed);
    formData.append("orientation", isLandscape);
    formData.append("withBackground", checkedBackground);

    try {
      const res = await baxios.post("/convert/convert-file", formData);
      setErrorMsg("");
      setLinkToDownload(res.data.targetName);
    } catch (err) {
      setErrorMsg(err);
      setIsLoading(false);
      setIsSuccess(false);
    }
  };
  // ================================= //
  useEffect(() => {
    if (files) {
      setZoomInOut(true);
      setZoomInOutAny(true);
      if (files.type === "text/html") {
        setAllValid(true);
      } else {
        setAllValid(false);
      }
    } else {
      setAllValid(false);
    }
  }, [files]);
  // ================================= //
  useEffect(() => {
    if (linkToDownload.length > 2) {
      setIsLoading(false);
      setIsSuccess(true);
    }
  }, [linkToDownload]);
  // ================================= //
  const handleConvertAgain = () => {
    setFiles(null);
    setErrorMsg("");
    setFileNames("");
    setIsPdfFormat(8);
    setAllValid(false);
    setIsLoading(false);
    setIsSuccess(false);
    setZoomInOut(false);
    setOpenOptions(false);
    setLinkToDownload("");
    setZoomInOutAny(false);
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
          <h2 className={classes.cardTitle}>File to PDF</h2>
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
                        {!files ? (
                          <React.Fragment>
                            <div className={classes.dragAreaContainer}>
                              <div
                                className={classes.dragArea}
                                style={{
                                  backgroundColor: isDragActive
                                    ? "#aaaaaa33"
                                    : "inherit",
                                }}
                              >
                                <div {...getRootProps()}>
                                  <input {...getInputProps()} accept=".html" />
                                  {isDragActive ? (
                                    <React.Fragment>
                                      <GridContainer>
                                        <GridItem xs={12}>
                                          <VscFileCode
                                            size={130}
                                            color="#777"
                                          />
                                        </GridItem>
                                        <GridItem xs={12}>
                                          <br />
                                          <span>Place .html file here...</span>
                                        </GridItem>
                                      </GridContainer>
                                    </React.Fragment>
                                  ) : (
                                    <React.Fragment>
                                      <GridContainer>
                                        <GridItem xs={12}>
                                          <VscFileCode
                                            size={130}
                                            color="#777"
                                          />
                                        </GridItem>
                                        <GridItem xs={12}>
                                          <br />
                                          <span>
                                            Drag files here or click in this
                                            area
                                          </span>
                                        </GridItem>
                                      </GridContainer>
                                    </React.Fragment>
                                  )}
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <div className={classes.dragAreaContainer}>
                              <div
                                className={classes.dragArea}
                                style={{
                                  backgroundColor: isDragActive
                                    ? "#aaaaaa33"
                                    : "inherit",
                                }}
                              >
                                <div {...getRootProps()}>
                                  <input {...getInputProps()} accept=".html" />
                                  <React.Fragment>
                                    <GridContainer>
                                      <GridItem xs={12}>
                                        <div
                                          className={classes.mainIconContainer}
                                        >
                                          <VscSymbolFile
                                            size={130}
                                            color="#777"
                                          />
                                          <HTMLInFileIcon user={user} />
                                        </div>
                                      </GridItem>
                                      <GridItem xs={12}>
                                        <br />
                                        <span className={classes.fileNameTitle}>
                                          File:{" "}
                                        </span>
                                        <br />
                                        <span className={classes.fileNameText}>
                                          {fileNames}
                                        </span>
                                      </GridItem>
                                    </GridContainer>
                                  </React.Fragment>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        )}
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
                        <div className={classes.textCenter}>
                          {zoomInOutAny ? (
                            <React.Fragment>
                              <Zoom
                                in={zoomInOut}
                                onExited={() => setZoomInOutAny(false)}
                              >
                                <Button
                                  round
                                  color="danger"
                                  onClick={() => {
                                    handleConvertAgain();
                                    setZoomInOut(false);
                                  }}
                                >
                                  Clear
                                </Button>
                              </Zoom>
                              <span style={{ padding: 10 }}></span>
                              <Zoom in={zoomInOut}>
                                <Button
                                  round
                                  disabled={!allValid}
                                  color={allValid ? "primary" : "none"}
                                  onClick={handleSubmit}
                                >
                                  Submit
                                </Button>
                              </Zoom>
                            </React.Fragment>
                          ) : null}
                          {!zoomInOutAny ? (
                            <Zoom in={!zoomInOut}>
                              <span className={classes.optionButtonPlaceholder}>
                                <br />
                                *Only accepts .html files*
                              </span>
                            </Zoom>
                          ) : null}
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
