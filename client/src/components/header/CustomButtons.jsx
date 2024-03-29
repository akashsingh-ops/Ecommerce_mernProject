import React from "react";
import { Button, Box, styled, Badge, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LoginContext } from "../../context/dataProvider";
import { useState, useContext } from "react";
import { Profile } from "./Profile";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

// compoennt
import { LoginDialog } from "../login/LoginDialog";
import CartItem from "../cart/CartItem";
const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "40px !important",
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: 12,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      color: "#2874f0",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      marginTop: 10,
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));
const LoginButton = styled(Button)`
  color: #2874f0;

  background: #ffffff;
  text-transform: none;
  padding: 2px 40px;
  border-radius: 2px;
  font-weigth: 600;
  height: 32px;
  box-shadow: none;
`;
const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

export const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);
  const openDialog = () => {
    setOpen(true);
  };
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};
