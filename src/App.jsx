import { useState, useMemo } from "react";


import "./App.css";
import DataTable from "./DataTable.jsx";
import EnhancedTable from "./EnhancedTable.jsx";
import InitialFilters from "./InitialFilters.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <DataTable /> */}
      <EnhancedTable />
    </>
  );
}

export default App;
