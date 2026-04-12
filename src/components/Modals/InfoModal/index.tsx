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

type Language = "de" | "en" | "tr";

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
        text: "Die Buchung im Bereich „Privatsprechstunde“ gilt ausschließlich für Privatpatienten und Selbstzahler. Gesetzlich versicherte Patienten, die einen Termin über diesen Bereich buchen, können nicht behandelt werden.",
      },
      {
        title: "Kinder unter 3 Jahren",
        text: "Für Kinder unter 3 Jahren ist eine Überweisung zwingend erforderlich.",
      },
    ],
  },
  tr: {
    title: "Önemli Bilgiler",
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
        text: "“Privatsprechstunde” alanından yapılan rezervasyonlar yalnızca özel sigortalı hastalar ve ücreti kendisi ödeyen kişiler için geçerlidir. Yasal sağlık sigortasına sahip hastalar bu alan üzerinden randevu alırlarsa muayene edilemezler.",
      },
      {
        title: "3 yaş altı çocuklar",
        text: "3 yaş altındaki çocuklar için sevk kâğıdı zorunludur.",
      },
    ],
  },
  en: {
    title: "Important Information",
    continue: "Continue appointment",
    cancel: "Cancel",
    languageLabel: "Language",
    hints: [
      {
        title: "Online appointment booking",
        text: "Only one online appointment can be booked within the same quarter. If you need another appointment, please contact us by phone.",
      },
      {
        title: "Private appointments",
        text: "Bookings in the “Privatsprechstunde” section are only valid for privately insured patients and self-paying patients. Patients with statutory health insurance cannot be treated if they book through this section.",
      },
      {
        title: "Children under 3 years",
        text: "A referral is mandatory for children under 3 years of age.",
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
  { value: "en", label: "English" },
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
          p: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {content.hints.map((hint, index) => (
            <Box key={index} px={2}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 1 }}>
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
          py: {
            xs: 1.5,
            md: 3,
          },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 1.5,
          width: "80%",
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
