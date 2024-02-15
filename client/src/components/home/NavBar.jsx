import React from "react";
import { AppBar, Toolbar, Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";
const Component = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
`;
const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;
export const NavBar = () => {
  return (
    <Component>
      {navData.map((data) => (
        <Container>
          <img src={data.url} style={{ width: 64 }} alt="nav" />
          <Text> {data.text}</Text>
        </Container>
      ))}
    </Component>
  );
};
