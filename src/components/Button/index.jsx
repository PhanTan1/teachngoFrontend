import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

const test = createMuiTheme({
  palette: {
    primary: {
      main: '#2A9D8F'
    },
    secondary: {
      main: "#E76F51"
    }
  }
});

function StyledButton(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={test}>
      <Button variant="contained" className={classes.margin} onClick={props.onClick} {...props}>
        {props.children}
      </Button>
    </ThemeProvider>
  )
}

export default StyledButton