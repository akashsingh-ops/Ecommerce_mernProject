import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
export const Profile = (account) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2 }}>{account}</Typography>
      </Box>
      <Menu
        anchorEL={open}
        open={open}
        onclose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <MenuItem onclick={handleClose}>Profile</MenuItem>
        <MenuItem onclick={handleClose}>My account</MenuItem>
        <MenuItem onclick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};
