import { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

const PaginationComponent = ({ count, page, handleChange }) => {
  const [bottom, setBottom] = useState("");
  useEffect(() => {
    if (window.screen.width <= 479) {
      setBottom("18vw");
    } else {
      setBottom("-3vw");
    }
  }, [bottom]);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(2),
      position: "absolute",
      bottom: bottom,
    },
  }));
  const classes = useStyles();

  return (
    <Pagination
      count={count}
      page={page}
      color="primary"
      onChange={handleChange}
      className={classes.margin}
    />
  );
};

export default PaginationComponent;
