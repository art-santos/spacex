import { Input } from "@chakra-ui/react";
import { useTypeSearch } from "context/TypeSearchContext";
import React from "react";

const SearchInput = React.forwardRef<HTMLInputElement>((props, ref) => {
  const { typeSearch } = useTypeSearch();
  
    return (
      <Input
        width="100%"
        type="text"
        id="search-input"
        placeholder={typeSearch==="mission" ? "Search Mission" : "Search Rocket"}
        ref={ref}
        ml="5px"
        mr="5px"
      />
    );
  });


export default SearchInput;