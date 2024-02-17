import React, { useState, useContext } from "react";
import {
  styled,
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { LoginContext } from "../../context/dataProvider";
import { authenticateSignup } from "../../service/api";

// CSS styling
const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  padding: 0;
  padding-top: 0;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 28%;
  height: 78.5%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

// Initial values
const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you`re new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

export const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValue);
  const { setAccount } = useContext(LoginContext);

  // Function to handle closing the dialog
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  // Function to toggle between login and signup views
  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  // Function to handle input change in the signup form
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  // Function to handle signup user action
  const signupUser = async () => {
    // Log the signup data being sent to the backend
    // Call the API to authenticate signup
    let response = await authenticateSignup(signup);
    console.log("Signup data:", response);
    if (!response) return; // If respons   e is null, exit function

    // Close the dialog and set the account context
    handleClose();
    setAccount(signup.username);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              {/* Login form */}
              <TextField
                variant="standard"
                label="Enter Email/ Mobile number"
              />
              <TextField variant="standard" label="Enter Password" />
              <Text>
                By continuing, you agree to Flipkart's Terms of use and Privacy
                Policy
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={toggleSignup}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              {/* Signup form */}
              <TextField
                variant="standard"
                onChange={onInputChange}
                label="Enter Firstname"
                name="firstname"
              />
              <TextField
                variant="standard"
                onChange={onInputChange}
                label="Enter Lastname"
                name="lastname"
              />
              <TextField
                variant="standard"
                onChange={onInputChange}
                label="Enter Username"
                name="username"
              />
              <TextField
                variant="standard"
                onChange={onInputChange}
                label="Enter Email"
                name="email"
              />
              <TextField
                variant="standard"
                onChange={onInputChange}
                label="Enter Password"
                name="password"
              />
              <TextField
                variant="standard"
                onChange={onInputChange}
                label="Enter Phone"
                name="phone"
              />
              <LoginButton onClick={signupUser}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};
