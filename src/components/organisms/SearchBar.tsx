import React from "react";

import SearchBarContainer from "components/atoms/home/search/SearchBarContainer";
import SearchButton from "components/atoms/home/search/SearchButton";
import SearchInput from "components/atoms/home/search/SearchInput";
import SearchToggle from "components/atoms/home/search/SearchToggle";
import { WrapItem } from "@chakra-ui/layout";

const SearchBar = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <SearchBarContainer>
        <WrapItem width={["90%","90%","10%","10%","10%"]}>
        <SearchToggle />
        </WrapItem>
        <WrapItem width={["90%","90%","50%","50%","50%"]}>
        <SearchInput ref={inputRef} />
        </WrapItem>
        <WrapItem width={["90%","90%","10%","10%","10%"]}>
        <SearchButton content={inputRef} />
        </WrapItem>
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
