export const styleContactContainer = {
  py: 3,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 5,
  bgcolor: "#f5f5f5",
};

export const styleH1 = {
  fontSize: {
    xs: "30px",
    md: "48px",
  },
  textAlign: "center",
};

//* Map Section

export const styleMapTitle = {
  fontSize: {
    xs: "24px",
    md: "24px",
  },
  textAlign: "center",
};

//* Opening Hours

export const styleOpeningHoursTitle = {
  fontSize: {
    xs: "24px",
    md: "34px",
  },
  textAlign: "center",
};

//* Links Section

export const styleLinksTitle = {
  fontSize: {
    xs: "24px",
    md: "34px",
  },
  textAlign: "center",
};

export const styleLinksBox = {
  order: { xs: 2, md: 3 },
  p: 3,
  "& p,a": {
    display: "flex",
    alignItems: "center",
    gap: 1,
    textDecoration: "none",
    "& br": {
      display: {
        xs: "block",
        md: "none",
      },
    },
  },
};
