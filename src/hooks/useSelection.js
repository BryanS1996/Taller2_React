import { useCallback, useState } from "react";

function useSelection(initialSelected = []) {
  const [selected, setSelected] = useState(initialSelected);

  const isSelected = useCallback((id) => selected.includes(id), [selected]);

  const toggle = useCallback((id) => {
    setSelected((prev) => {
      const exists = prev.includes(id);
      if (exists) return prev.filter((item) => item !== id);
      return [...prev, id];
    });
  }, []);

  const selectAll = useCallback((ids = []) => setSelected(ids), []);

  const clear = useCallback(() => setSelected([]), []);

  return { selected, isSelected, toggle, selectAll, clear, setSelected };
}

export default useSelection;
