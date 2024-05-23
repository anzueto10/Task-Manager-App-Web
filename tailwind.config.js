/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      backgroundColor: {
        taskBoardContainer: "#191b1f",
        taskCard: "#191b1f",
        taskBoard: "#292d32",
        taskCreater: "#292d32",
        selectStatus: "#292d32",
        taskAddButton: "#c4dbfa",
        taskAddButtonHover: "#b0d0fa",
        taskAddButtonClick: "#96c0f7",
        tagSky: "#c4dbfa",
      },

      gradientColorStops: {
        containerCreatersBlue: "#1f264f",
        containerCreatersRed: "#5f2c42",
      },

      colors: {
        containerCreatersBlue: "#1f264f",
        containerCreatersRed: "#5f2c42",
      },

      textColor: {
        createrLabel: "#aab2bb",
        taskAddButton: "#3d52b6",
        tagSky: "#3d52b6",
      },

      borderColor: {
        createrInput: "#3a4046",
        cancelButtonCreaterForm: "#3a4046",
      },

      fontFamily: {
        system:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
