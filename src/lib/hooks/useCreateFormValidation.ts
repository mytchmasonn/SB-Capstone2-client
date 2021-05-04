import React, { useState, useEffect } from "react";

const useCreateValidation = (isUrl: string): { allFieldsValid: boolean } => {
  const [urlValid, setUrlValid] = useState(false);
  const [allFieldsValid, setAllFieldsValid] = useState(false);
  const checkUrl = isUrl.toLowerCase();
  useEffect(() => {
    if (checkUrl.length > 8) {
      if (checkUrl.includes("http://") || checkUrl.includes("https://")) {
        setUrlValid(true);
      } else {
        setUrlValid(false);
      }
    } else {
      setUrlValid(false);
    }
  }, [checkUrl]);

  useEffect(() => {
    if (urlValid) {
      setAllFieldsValid(true);
    } else {
      setAllFieldsValid(false);
    }
  }, [urlValid]);
  return { allFieldsValid };
};

export default useCreateValidation;
