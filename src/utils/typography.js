import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scaleRatio: 2.0,

  headerFontFamily: [
    "Fjalla One",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Droid Sans", "Georgia", "serif"],
  // See below for the full list of options.
  googleFonts: [
    {
      name: "Droid Sans",
      styles: ["400", "400i", "700", "700i"],
    },
    {
      name: "Fjalla One",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
})

export default typography
