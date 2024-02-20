import "./App.css";
import { Header } from "./components/header/Header";
import { Box } from "@mui/material";
import DataProvider from "./context/dataProvider";
import { HOme } from "./components/home/HOme";
function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ margin: 10 }}>
        <HOme />
      </Box>
    </DataProvider>
  );
}

export default App;
