import React, { useMemo, useState } from "react";
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  SelectChangeEvent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type InfoModalProps = {
  open: boolean;
  onClose: () => void;
  onContinue: () => void;
};

type Language = "de" | "tr";

const translations = {
  de: {
    title: "Wichtige Hinweise",
    continue: "Termin fortsetzen",
    cancel: "Abbrechen",
    languageLabel: "Sprache",
    hints: [
      {
        title: "Online-Terminvergabe",
        text: "Innerhalb desselben Quartals ist nur ein Online-Termin möglich. Sollten Sie einen weiteren Termin benötigen, vereinbaren Sie diesen bitte telefonisch.",
      },
      {
        title: "Privattermine",
        text: "Die Buchung im Bereich „Privattermin“ gilt ausschließlich für Privatpatienten und Selbstzahler. Gesetzlich versicherte Patienten, die einen Termin über diesen Bereich buchen, können nicht behandelt werden.",
      },
      {
        title: "Kinder unter 3 Jahren",
        text: "Für Kinder unter 3 Jahren ist eine Überweisung zwingend erforderlich.",
      },
    ],
  },
  tr: {
    title: "Önemli Bilgilendirmeler",
    continue: "Randevuya devam et",
    cancel: "İptal",
    languageLabel: "Dil",
    hints: [
      {
        title: "Online randevu",
        text: "Aynı çeyrek(3 aylık) dönem içinde yalnızca bir online randevu alınabilir. Yeni bir randevuya ihtiyacınız varsa lütfen telefonla iletişime geçin.",
      },
      {
        title: "Özel randevular",
        text: "“Privattermin” alanından yapılan rezervasyonlar yalnızca özel sigortalı hastalar ve ücreti kendisi ödeyen kişiler için geçerlidir. Yasal sağlık sigortasına sahip hastalar bu alan üzerinden randevu alırlarsa muayene edilemezler.",
      },
      {
        title: "3 yaş altı çocuklar",
        text: "3 yaş altındaki çocuklar için sevk kâğıdı zorunludur.",
      },
    ],
  },
} satisfies Record<
  Language,
  {
    title: string;
    continue: string;
    cancel: string;
    languageLabel: string;
    hints: { title: string; text: string }[];
  }
>;

const languageOptions: { value: Language; label: string }[] = [
  { value: "de", label: "Deutsch" },
  { value: "tr", label: "Türkçe" },
];

const InfoModal = ({ open, onClose, onContinue }: InfoModalProps) => {
  const [language, setLanguage] = useState<Language>("de");

  const content = useMemo(() => translations[language], [language]);

  const handleLanguageChange = (event: SelectChangeEvent<Language>) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pr: 1,
        }}
      >
        {/* TITLE */}
        <Typography sx={{ fontSize: 22, fontWeight: 600 }}>
          {content.title}
        </Typography>

        {/* RIGHT SIDE */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FormControl size="small">
            <Select
              value={language}
              onChange={handleLanguageChange}
              sx={{ minWidth: 120 }}
            >
              {languageOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent
        dividers
        sx={{
          px: 3,
          py: 2.5,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {content.hints.map((hint, index) => (
            <Box
              key={index}
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: "grey.50",
                border: "1px solid",
                borderColor: "grey.200",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                {hint.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {hint.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          margin: "auto",
          pb: 4,
          pt: 3,
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
          {content.continue}
        </Button>

        <Button onClick={onClose} variant="outlined" fullWidth>
          {content.cancel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoModal;
