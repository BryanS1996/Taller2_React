import { useCallback, useState } from "react";

function useDialog(initialOpen = false) {
  const [open, setOpen] = useState(initialOpen);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return { open, handleOpen, handleClose, setOpen };
}

export default useDialog;
