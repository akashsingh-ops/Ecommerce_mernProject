import React from "react";
import { Box, styled, Button, Grid, Typography } from "@mui/material";
import { addEllipsis } from "../../utils/comman-utils";
import ButtonGroup from "./ButtonGroup";

import { removeFromCart } from "../../redux/actions/cartAction";
const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`;
const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const SmallText = styled(Typography)`
  color: #787878;
  font-size: 14px;
  margin-top: 10px;
`;
const RemoveBtn = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;
const CartItem = ({ item, removeItemFromCart }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="img" style={{ height: 110, width: 110 }} />
        <ButtonGroup />
      </LeftComponent>
      <Box style={{ margin: 15 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>
          Seller: RetailNet{" "}
          <Box component="span">
            <img
              src={fassured}
              alt="img"
              style={{ width: 50, marginLeft: 10 }}
            />
          </Box>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <span style={{ fontWeight: 600, fontSize: 18 }}>
            ₹{item.price.cost}
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388E3C" }}>{item.price.discount} off</span>
        </Typography>
        <RemoveBtn>Save for Later</RemoveBtn>
        <RemoveBtn onClick={() => removeItemFromCart(item.id)}>
          Remove
        </RemoveBtn>{" "}
      </Box>
    </Component>
  );
};
export default CartItem;
