import { useState, useEffect } from "react";
// a real beauty mytch. good job. have u heard of a switch? nice
const useFormatParser = (isPdfFormat) => {
  const [state, setState] = useState("");
  useEffect(() => {
    if (isPdfFormat === 0) setState("Letter");
    else if (isPdfFormat === 1) setState("Legal");
    else if (isPdfFormat === 2) setState("Tabloid");
    else if (isPdfFormat === 3) setState("Ledger");
    else if (isPdfFormat === 4) setState("A0");
    else if (isPdfFormat === 5) setState("A1");
    else if (isPdfFormat === 6) setState("A2");
    else if (isPdfFormat === 7) setState("A3");
    else if (isPdfFormat === 8) setState("A4");
    else if (isPdfFormat === 9) setState("A5");
    else if (isPdfFormat === 10) setState("A6");
    else setState("A4");
  }, [isPdfFormat]);
  return state;
};

export default useFormatParser;
