import "./App.css";
import { Header } from "./components/header/Header";
import { Box } from "@mui/material";
import DataProvider from "./context/dataProvider";
import { HOme } from "./components/home/HOme";
import { DetailView } from "./components/details/DetailView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ margin: 10 }}>
          <Routes>
            <Route path="/" element={<HOme />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
