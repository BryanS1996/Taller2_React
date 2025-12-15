import { useMemo, useState } from "react";

/**
 * Maneja productos con búsqueda, alta y borrado por ids.
 */
function useProducts(initialProducts = []) {
  const [products, setProducts] = useState(initialProducts);
  const [searchText, setSearchText] = useState("");

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const deleteByIds = (ids = []) => {
    if (!ids.length) return;
    setProducts((prev) => prev.filter((item) => !ids.includes(item.id)));
  };

  const filteredProducts = useMemo(() => {
    const normalized = searchText.toLowerCase();
    return products.filter((item) => item.name.toLowerCase().includes(normalized));
  }, [products, searchText]);

  return {
    products,
    filteredProducts,
    searchText,
    setSearchText,
    addProduct,
    deleteByIds,
  };
}

export default useProducts;
