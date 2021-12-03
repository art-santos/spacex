import React from "react";

const TypeSearchContext = React.createContext({});

export default function TypeSearchProvider({ children }: JSX.ElementChildrenAttribute) {
  const [typeSearch, setTypeSearch] = React.useState<String>("mission");

  return (
    <TypeSearchContext.Provider
      value={{
        typeSearch,
        setTypeSearch,
      }}
    >
      {children}
    </TypeSearchContext.Provider>
  );
}

export function useTypeSearch() {
  const context = React.useContext(TypeSearchContext);
  // @ts-ignore
  const { typeSearch, setTypeSearch } = context;
  return { typeSearch, setTypeSearch };
}
