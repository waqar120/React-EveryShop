import { makeStyles } from "@mui/styles";

export const CardStyle = makeStyles({
  "main-card": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
  },
  body: {
    textAlign: "justify",
  },
  button: {
    backgroundColor: "#3a3a3a !important",
    color: "white !important",
    textDecoration: "none !important",
    padding: "10px !important",
    borderRadius: "3px !important",
  },
  fullcard: {
    width: "100%",
    // margin:'10px',
  },
  collectiontitle: {
    textAlign: "left",
    fontSize: "20px !important",
  },
});
