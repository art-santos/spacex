import React from "react";

import SearchBarContainer from "components/atoms/home/search/SearchBarContainer";
import SearchButton from "components/atoms/home/search/SearchButton";
import SearchInput from "components/atoms/home/search/SearchInput";
import SearchToggle from "components/atoms/home/search/SearchToggle";

const SearchBar = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <SearchBarContainer>
        <SearchToggle />
        <SearchInput ref={inputRef} />
        <SearchButton content={inputRef} />
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
