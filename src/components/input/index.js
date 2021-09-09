import React from "react";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

const InputComponent = ({ type, name, icon, onChange, value, width }) => {
  const useStyles = makeStyles((theme) => ({
    textField: {
      width: `calc(${width}vw + 35px)`,
    },
    adorment: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: "calc(1.5vw + 14px)",
    },
    FormControl: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  return (
    <FormControl className={classes.FormControl}>
      <InputLabel
        htmlFor="standard-adornment-password"
        className={classes.margin}
      >
        {name}
      </InputLabel>
      <Input
        label={name}
        onChange={onChange}
        value={value}
        type={type}
        className={classes.textField}
        endAdornment={
          <InputAdornment position="end" className={classes.adorment}>
            {icon}
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default InputComponent;
