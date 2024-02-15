import React from "react";
import { AppBar, Button, Box, styled, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CustomButtons = () => {
  const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button,
    & > p,
    & > div {
      margin-right: 40px;
      font-size: 16px;
      align-items: center;
    }
  `;
  const LoginButton = styled(Button)`
    color: #2874f0;

    background: #ffffff;
    text-transform: none;
    padding: 2px 40px;
    border-radius: 2px;
    font-weigth: 600;
    height: 32px
    box-shadow:none;
  `;
  const Container = styled(Box)`
    display: flex;
  `;

  return (
    <Wrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  );
};
