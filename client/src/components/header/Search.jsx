import React from "react";
import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { getProduct as listProducts } from "../../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux"; // hooks
import { Link } from "react-router-dom";

const SearchCotainer = styled(Box)`
  background: #fff;
  width: 36%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
`;

const InputSearchBasee = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;
const Search = () => {
  const [text, setText] = useState();
  const [open, setOpen] = useState(true);

  const getText = (text) => {
    setText(text);
    setOpen(false);
  };

  const getProducts = useSelector((state) => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <SearchCotainer>
      <InputSearchBasee
        onClick={(e) => getText(e.target.value)}
        placeholder="Search for product, brands and more"
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setOpen(true)}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchCotainer>
  );
};
export default Search;
