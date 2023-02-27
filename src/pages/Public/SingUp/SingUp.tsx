import { Box } from "@mui/material";

export interface SingUp {}

const SingUp: React.FC<SingUp> = () => {
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
      sing up
    </Box>
  );
};

export default SingUp;
