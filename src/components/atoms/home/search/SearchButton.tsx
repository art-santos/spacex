import { Button } from "@chakra-ui/react";

import getIcon from "components/atoms/default/Icons";
import { useQueryContext } from "context/QueryContext";
import { useTypeSearch } from "context/TypeSearchContext";

const SearchButton = ({ content }) => {
  const { handleSearch } = useQueryContext();
  const { typeSearch } = useTypeSearch();

  return (
    <Button
      w={["100%", "100%", "100%", "100%", "20%"]}
      rounded="md"
      id="search-submit"
      onClick={() => {
        handleSearch(content.current.value, typeSearch);
      }}
    >
      {getIcon("search")}
    </Button>
  );
};

export default SearchButton;
