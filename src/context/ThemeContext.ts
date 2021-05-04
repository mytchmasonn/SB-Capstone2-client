import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "light":
      return { ...state, theme: "light" };
    case "dark":
      return { ...state, theme: "dark" };
    default:
      return state;
  }
};
const lightTheme = (dispatch) => () => {
  localStorage.setItem("html8pdfTheme", "light");
  dispatch({ type: "light" });
};
const darkTheme = (dispatch) => () => {
  localStorage.setItem("html8pdfTheme", "dark");
  dispatch({ type: "dark" });
};

const current = localStorage.getItem("html8pdfTheme") || "light";

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    lightTheme,
    darkTheme,
  },
  { theme: current }
);
