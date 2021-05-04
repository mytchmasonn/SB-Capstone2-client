import {
  useRef,
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

const useUnmount = (fn: () => any): void => {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useEffect(() => fnRef.current(), []);
};

const useRafState = <S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>] => {
  const frame = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  useUnmount(() => {
    cancelAnimationFrame(frame.current);
  });

  return [state, setRafState];
};

export default useRafState;
