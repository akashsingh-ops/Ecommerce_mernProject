import "./App.css";
import { Header } from "./components/header/Header";
import { Box, styled, Typography } from "@mui/material";

import { HOme } from "./components/home/HOme";
function App() {
  return (
    <div>
      <Header />
      <Box style={{ margin: 54 }}>
        <HOme />
      </Box>
    </div>
  );
}

export default App;
