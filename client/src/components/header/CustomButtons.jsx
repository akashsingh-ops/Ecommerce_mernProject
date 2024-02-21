import React from "react";
import { Button, Box, styled, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LoginContext } from "../../context/dataProvider";
import { useState, useContext } from "react";
import { Profile } from "./Profile";
// compoennt
import { LoginDialog } from "../login/LoginDialog";
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
const Container = styled(Box)(({ theme }) => ({
  display: "flex",
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

      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};
