interface Theme {
  bodyColor: string;
  text: string;
  cardBg: string;
  categoryBg: string;
}

export const darkTheme: Theme = {
  bodyColor: "#181a2a",
  text: "#fff",
  cardBg: "#242535",
  categoryBg: "#181a2a",
};

export const lightTheme: Theme = {
  bodyColor: "#ffffff",
  text: "#000",
  cardBg: "#ececec",
  categoryBg: "#ececec",
};

interface I_Colors {
  backgroundColor: string;
  borderColor: string;
  mainColor: string;
  mainLightPrimary: string;
  white: string;
  black: string;
  darkBlue: string;
  lightGrey: string;
  lightGreen: string;
  lightOrange: string;
  lightYellow: string;
  lightRed: string;
  inputField: string;
  darkGreen: string;
  darkYellow: string;
}

export const colors: I_Colors = {
  backgroundColor: "#b6bfc8",
  borderColor: "#96a5b8",
  mainColor: "#5d5fef",
  mainLightPrimary: "#ebecfc",
  white: "#fff",
  black: "#000",
  darkBlue: "#151d48",
  lightGrey: "#444a6d",
  lightGreen: "#3cb371",
  lightOrange: "#FEB200",
  lightYellow: "#ffe876",
  lightRed: "#ef5d5d",
  inputField: "#e9e9e9",
  darkGreen: "#339966",
  darkYellow: "#ffd500",
};
