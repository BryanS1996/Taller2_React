import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { usePeople } from "./context/PeopleContext.jsx";

function PeopleList() {
  const { people } = usePeople();

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Personas ({people.length})
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <List>
        {people.map((person) => (
          <ListItem key={person.id} disablePadding>
            <ListItemText primary={person.name} secondary={`Edad: ${person.age}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default PeopleList;
