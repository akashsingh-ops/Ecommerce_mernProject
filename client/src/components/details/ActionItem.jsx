import React from "react";
import { Box, styled, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { UseDispatch, useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../redux/actions/cartAction";
const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "5px 5px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  borderRadius: "2px",
  height: "50px", // Add "px" here
  color: "#fff",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
}));

export const ActionItem = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  const { id } = product;
  const navigate = useNavigate();
  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          width: "90%",
          border: "1.3px solid #f0f0f0",
        }}
      >
        <Image src={product.detailUrl} alt="Image" />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={() => addItemToCart()}
      >
        <ShoppingCartIcon />
        Add to cart
      </StyledButton>

      <StyledButton style={{ background: "#fb541b" }} variant="contained">
        <FlashOnIcon /> Buy now
      </StyledButton>
    </LeftContainer>
  );
};
