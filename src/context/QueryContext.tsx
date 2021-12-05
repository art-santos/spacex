import React from "react";
import { useQuery } from "@apollo/client";

import LOAD_MORE_QUERY from "queries/loadMoreQuery";


const QueryContext = React.createContext({});

 export default function QueryProvider({ children }: JSX.ElementChildrenAttribute) {
   
  const {
    loading,
    error,
    data: launchData,
    fetchMore,
    refetch,
  } = useQuery(LOAD_MORE_QUERY, {
    variables: {
      offset: 0,
      limit: 8,
      mission: "",
      rocket: "",
    },
  });

  const handleSearch = (e: string, typeSearch: string) => {
    if (typeSearch === "mission"){
      refetch({
        offset: 0,
        limit: 8,
        rocket: "",
        mission: e,
      });
    } else {
      refetch({
        offset: 0,
        limit: 8,
        mission: "",
        rocket: e,
      });
    }
  };

  return (
  <QueryContext.Provider value={{
    loading,
    launchData,
    error,
    refetch,
    fetchMore,
    handleSearch,
  }}>
    {children}
  </QueryContext.Provider>
)
}

export function useQueryContext(){
   const context = React.useContext(QueryContext);
   // @ts-ignore
   const { loading, launchData, error, refetch, fetchMore, handleSearch } = context;
   return { loading, launchData, error, refetch, fetchMore, handleSearch };
}
