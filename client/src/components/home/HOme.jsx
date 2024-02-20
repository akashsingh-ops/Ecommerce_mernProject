import React from "react";
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Fragment } from "react";
import { styled, Box } from "@mui/material";
import { MidSlide } from "./MidSlide";
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
    <>
      <NavBar />

      <Container>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <Slide products={products} title="Discount for you" timer={false} />
        <Slide products={products} title="Suggesting Items" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season`s top picks" timer={false} />
        <Slide
          products={products}
          title="Top Deals on Accessories"
          timer={false}
        />
      </Container>
    </>
  );
};
