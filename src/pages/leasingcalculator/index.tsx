import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "@fontsource/itim";
import PageBar from "@/features/presentation/components/PageBar";
import LeasingPage from "@/features/presentation/components/LeasingPage";

const LandingPage = () => {
  const bgStyle = {
    backgroundColor: "#abbdce",
    backgroundImage: "none",
  };
  const theme = createTheme({
    typography: {
      fontFamily: "Itim",
      button: {
        fontStyle: "italic",
      },
    },
    palette: {
      primary: {
        //light: "#b2dfdb",
        light: "#abbdce",
        //main: "#5F8575",
        main: "#5b799e",
      },
    },
  });
  return (
    <div style={bgStyle}>
      <ThemeProvider theme={theme}>
        <PageBar />
        <LeasingPage />
      </ThemeProvider>
    </div>
  );
};

export default LandingPage;