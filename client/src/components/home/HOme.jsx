import React from "react";
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Fragment } from "react";
import { styled, Box } from "@mui/material";
import { useEffect } from "react";
import { getProduct } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from "./Slide";
const Container = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;
export const HOme = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  // useEffect take twoo argument
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  // empty [] array is condition of didmount
  return (
    <Fragment>
      <NavBar />

      <Container>
        <Banner />
        <Slide products={products} />
      </Container>
    </Fragment>
  );
};
