import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppBar, Toolbar, Grid, Box, styled, Typography } from "@mui/material";
import { ActionItem } from "./ActionItem.jsx";
import { getProductDetails } from "../../redux/actions/productAction.js";
// when user click on some product caleed router-dom
import { ProductDetail } from "./ProductDetail.jsx";
const Component = styled(Box)`
  margin-top: 45px;
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding-left: 50px;
  & > p {
    margin-top: 10px;
  }
`;
export const DetailView = () => {
  // with the use of useSelecter with get the value from our redux
  const { loading, product } = useSelector((state) => state.getProductDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product, loading]);
  console.log("===>>", product);
  return (
    <Component>
      <Box></Box>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};
