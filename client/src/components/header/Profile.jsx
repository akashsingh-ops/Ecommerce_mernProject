import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Typography, Menu, MenuItem, Box, styled } from "@mui/material";

const Component = styled(Menu)`
  margin-top: 5px;
  padding: 0;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 10px;
`;

const LoginButton = styled(Typography)`
  color: #2874f0;

  background: #ffffff;
  text-transform: none;
  padding: 2px 30px 2px 30px;
  border-radius: 2px;
  font-weigth: 700;
  height: 32px;
  box-shadow: none;
`;
export const Profile = ({ account, setAccount }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    setAccount("");
    handleClose(); // Close the menu after logout
  };

  return (
    <>
      <Box onClick={handleClick}>
        <LoginButton style={{ marginTop: 2, cursor: "pointer" }}>
          {account}
        </LoginButton>
      </Box>
      <Component
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={logout}>
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};
