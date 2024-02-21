import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "55px 130px 0 130px !important",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    margin: "55px 0px 0 0 !important",
  },
}));
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
      {navData.map((data, index) => (
        <Container key={index}>
          <img src={data.url} style={{ width: 64 }} alt="nav" />
          <Text> {data.text}</Text>
        </Container>
      ))}
    </Component>
  );
};
