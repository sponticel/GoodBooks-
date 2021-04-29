import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Link } from 'react-router-dom'
import { verifyUser } from '../services/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Nav(props) {
  const classes = useStyles();
  const { currentUser, handleLogout } = props;
  return (
    <div className={classes.root}>
    <AppBar position="static" style={{backgroundColor: "yellow"}}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} style={{backgroundColor: "white"}} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title} style={{color: "black"}}>
            goodBooks
        </Typography>
          {currentUser ? (
            <>
              <p style={{ color: "black" }}>{currentUser.username}</p>
              <br />
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
                  
          )}
          {
            currentUser &&
            <>
              <Link style={{ textDecoration: "none", color: "black" }}>Books</Link>
            </>
          }  
          
      </Toolbar>
    </AppBar>
    </div>
  )
}
