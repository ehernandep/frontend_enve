import React from "react";

import { Box } from "@mui/material";

export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      sx={{
        alignItems: "center",
        borderRadius: 1,
        height: "100vh",
        alignContent: "center",
      }}
    >
      login
    </Box>
  );
};

export default Login;
