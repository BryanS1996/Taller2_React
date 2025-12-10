import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Buttons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onAdd}>
      ADD
      </Button>

      <Button variant="outlined" onClick={onDelete}>
      DELETE
      </Button>
    </Stack>
  );
}
