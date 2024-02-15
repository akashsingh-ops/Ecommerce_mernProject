import React from "react";
import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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
const InputSearchBasee = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;
export const Search = () => {
  return (
    <SearchCotainer>
      <InputSearchBasee placeholder="Search for product, brands and more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchCotainer>
  );
};
