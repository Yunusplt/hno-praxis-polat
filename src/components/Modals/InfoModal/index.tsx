import React from "react";
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

type InfoModalProps = {
  open: boolean;
  onClose: () => void;
  onContinue: () => void;
};

const InfoModal = ({ open, onClose, onContinue }: InfoModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontSize: 26, margin: "auto" }}>
        Wichtiger Hinweis
      </DialogTitle>

      <DialogContent>
        <Typography textAlign="center">
          Für Kinder <strong>unter 3 Jahren</strong> ist eine{" "}
          <strong>Überweisung</strong> zwingend erforderlich. Ohne gültige
          Überweisung ist eine Behandlung leider nicht möglich.
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          margin: "auto",
          pb: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 1.5,
          width: "75%",
          "& > :not(:first-of-type)": {
            marginLeft: 0,
          },
        }}
      >
        <Button onClick={onContinue} variant="contained" fullWidth>
          Termin fortsetzen
        </Button>

        <Button onClick={onClose} variant="outlined" fullWidth>
          Abbrechen
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoModal;
