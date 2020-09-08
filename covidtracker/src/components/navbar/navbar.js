import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import style from './navbar.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontColor:"white",
    opacity:0.9
  },

  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration:'none',
    color:'white',
    marginLeft:'10px'
  }
}));

const Navbar =()=> {
  const classes = useStyles();

  return (

      <div className={style.quote} >
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
          <Typography edge="start" variant="h6" color="inherit" className={classes.menuButton}>
          <Link to='/' className={style.link}>Covid Tracker</Link>
          </Typography>
          <Typography edge="start" variant="h6" color="inherit" >
          <Link to='/state' className={style.link}>State data</Link>
          </Typography>
          <Typography edge="start" variant="h6" color="inherit" >
          <Link to='/help' className={style.link}>Help?</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
      <div >
         <h1 className={style.box}>Stay Home<br/> Save Lives</h1>
      </div>
     </div>
  );
}
export default Navbar;