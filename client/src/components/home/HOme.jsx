import React from "react";
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Fragment } from "react";
import { styled, Box } from "@mui/material";

const Container = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;
export const HOme = () => {
  return (
    <Fragment>
      <NavBar />

      <Container>
        <Banner />
      </Container>
    </Fragment>
  );
};
