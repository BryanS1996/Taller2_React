import { createContext, useContext, useMemo } from "react";
import useProducts from "../hooks/useProducts";
import { initialPeople } from "../data/people";

const PeopleContext = createContext(null);

function normalizeInitial() {
  return initialPeople.map((p) => {
    const first = p.firstName || "";
    const last = p.lastName || "";
    const name = `${first} ${last}`.trim() || first || last;
    return {
      id: p.id,
      name,
      age: p.age ?? 0,
    };
  });
}

export function PeopleProvider({ children }) {
  const seed = useMemo(() => normalizeInitial(), []);
  const { products, filteredProducts, setSearchText, addProduct, deleteByIds } =
    useProducts(seed);

  const value = useMemo(
    () => ({
      people: products,
      filteredPeople: filteredProducts,
      setSearchText,
      addPerson: addProduct,
      deleteByIds,
    }),
    [products, filteredProducts, setSearchText, addProduct, deleteByIds]
  );

  return <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>;
}

export function usePeople() {
  const ctx = useContext(PeopleContext);
  if (!ctx) {
    throw new Error("usePeople debe usarse dentro de PeopleProvider");
  }
  return ctx;
}
