export const styleLandingPageBox = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
  width: "100%",

  "& img": {
    objectFit: "cover",
    objectPosition: "bottom",
    filter: "brightness(95%)",
  },
};

export const styleLandingPageTextBox = {
  position: "absolute",
  textAlign: "center",
  p: 3,
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const styleLandingPageH1 = {
  position: "absolute",
  top: {
    xs: 60,
    md: 80,
  },
  left: "50%",
  transform: "translateX(-50%)",
};

export const styleLandingPageButton = {
  mt: 2,
  fontSize: "20px",
};

export const styleOTAIGrid = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const styleOTAITitle = {
  textAlign: {
    xs: "center",
    md: "left",
  },
};

export const styleOHTGrid = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "& div": {
    backgroundColor: "#f8f8f8",
    width: "100%",
  },
  "& h2": {
    mb: 2,
  },
};

export const styleOTAIImagesBox = {
  "& h3": {
    backgroundColor: "#33333373",
    display: "inline-block",
    p: 1,
    px: 2,
    borderRadius: 3,
  },
  "& img": {
    borderRadius: 3,
    height: {
      xs: "250px",
      sm: "320px",
      md: "280px",
      lg: "320px",
    },
    width: {
      xs: "100%",
      md: "570",
    },
  },
};
