import { Button } from "@chakra-ui/react";
import React from "react";

import getIcon from "components/atoms/default/Icons";
import { useTypeSearch } from "context/TypeSearchContext";

const SearchToggle = () => {
  const { typeSearch, setTypeSearch } = useTypeSearch();

  return (
    <Button
      id="search-toggle"
      w={["100%", "100%", "100%", "100%", "20%"]}
      rounded="md"
      className={typeSearch === "mission" ? "rocket" : "mission"}
      leftIcon={typeSearch  === "mission" ? getIcon("flag") : getIcon("rocket")}
      onClick={() =>
        setTypeSearch( typeSearch === "mission" ? "rocket" : "mission" )
      }
    >
      {typeSearch === "mission" ? "Mission" : "Rocket"}
    </Button>
  );
};

export default SearchToggle;
