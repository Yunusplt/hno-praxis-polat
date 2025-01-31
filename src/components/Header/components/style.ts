export const styleLogoDesktopView = {
  display: { xs: "none", sm: "flex" },
  cursor: "pointer",
  flexGrow: 1,
  py: 1,
  "& img": {
    width: { sm: 188, md: 283 },
    height: { sm: 58, md: 86 },
  },
};

export const styleLogoMobileView = {
  display: { xs: "flex", sm: "none" },
  py: 1,
};

const drawerWidth = 240;

export const styleDrawer = {
  display: { xs: "block", sm: "none" },
  color: "black",
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: drawerWidth,
  },
};
