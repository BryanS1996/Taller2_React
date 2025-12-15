import { Route, Routes } from "react-router-dom";
import Typography from "@mui/material/Typography";

import EnhancedTable from "../EnhancedTable.jsx";
import InitialFilters from "../InitialFilters.jsx";
import PeopleList from "../PeopleList.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EnhancedTable />} />
      <Route path="/filtros" element={<InitialFilters />} />
      <Route path="/personas" element={<PeopleList />} />
      <Route path="*" element={<Typography>Ruta no encontrada</Typography>} />
    </Routes>
  );
}

export default AppRoutes;
