import React from "react";
import { MdDeleteForever } from "react-icons/md";
import ButtonElement from "../../button/index";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../../redux/actions/expensesActions";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ExpenseCard = ({ expense, notifySuccess }) => {
  const time = moment(expense.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteExpense(expense));
    notifySuccess();
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "90%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    summary: {
      borderLeft: `5px solid ${expense.purpose[0].color}`,
    },
    margin: {
      marginBottom: theme.spacing(3),
    },
    justify: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion className={classes.margin}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.summary}
        >
          <Typography className={classes.heading}>{expense.title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.justify}>
          <Typography>{expense.price} €</Typography>
          <Typography>{time}</Typography>
          <ButtonElement
            text=""
            onClick={handleDelete}
            icon={<MdDeleteForever />}
            buttonClass="delete"
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ExpenseCard;
