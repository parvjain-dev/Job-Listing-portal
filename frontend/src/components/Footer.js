import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const { palette } = useTheme();
  return (
    <>
      <Box
        sx={{
          height: "70px",
          bgcolor: palette.secondary.midNightRed,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box component="span" sx={{ color: "#ffffff" }}>
          All rights reserved by Parv Jain 2024.
        </Box>
      </Box>
    </>
  );
};

export default Footer;
