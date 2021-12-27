import { ExpandLess } from "@mui/icons-material";
import { IconButton, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";

type IScrollType = {
  showBelow: number;
};
const useStyles = makeStyles((theme: Theme) => ({
  toTop: {
    zIndex: 2,
    position: "fixed",
    bottom: "3vh",
    backgroundColor: "#c2185b",
    color: "white",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.4s",
      color: "white",
      backgroundColor: "#ce93d8",
    },
    right: "5%",
    [theme.breakpoints?.up("xs")]: {
      right: "5%",
      backgroundColor: "rgb(220,220,220,0.7)",
    },
    [theme.breakpoints?.up("lg")]: {
      right: "6.5%",
    },
  },
}));
const Scroll: React.FC<IScrollType> = ({ showBelow }): JSX.Element => {
  const classes = useStyles();
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          className={classes.toTop}
          aria-label="to top"
          component="span"
        >
          <ExpandLess />
        </IconButton>
      )}
    </div>
  );
};
export default Scroll;
