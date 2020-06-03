import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link, useHistory} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://www.pdvg.it/wp-content/uploads/2020/03/LOL_CMS_314_Tile_01-Feature_H40-V50-min_94ucpce02v5cgf3ootvq.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpSide(props) {
  const history = useHistory();
  const classes = useStyles();
  const [view,setView] = useState("sign-in")
  

  const [formInput, setFormInput] = useState();
  const [text, setText] = useState("")


  const handleChange = e => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log("fired");
    const email = formInput.email
    const password = formInput.password
    
    const res = await fetch(`${process.env.
      REACT_APP_SERVER}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (data.status === "ok") {
      const token = data.data.token
      localStorage.setItem("token", token);
      console.log(data.data.user)
      props.setUser(data.data.user);
      history.push("/profile")
    } else {
      // token is not valid, clear the token so that we don't have to check again
      props.setUser(null)
      localStorage.removeItem("token");
      setText("You have entered an invalid email or password. Please try again.")
    }
    // finally set our app state to LOADED
    // props.setLoaded(true);
  };
  

  const login = async (email, password) => {
    // const email = formInput.email
    // const password = formInput.password
    
    const res = await fetch(`${process.env.
      REACT_APP_SERVER}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (data.status === "ok") {
      const token = data.data.token
      localStorage.setItem("token", token);
      props.setUser(data.data.user);
      history.push("/profile")
    } else {
      // token is not valid, clear the token so that we don't have to check again
      props.setUser(null)
      localStorage.removeItem("token");
      setText("You have entered an invalid email or password. Please try again.")
    }
    // finally set our app state to LOADED
    // props.setLoaded(true);
  };


const handleRegister = async (e) => {
    e.preventDefault();
    const email = formInput.email
    const password = formInput.password
    const name = formInput.name
    const summonerName = formInput.summonerName
    const res = await fetch(process.env.REACT_APP_SERVER+"/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password, summonerName})
    });
    //login after signing up
    console.log(res.status)
    if (res.status === 201) {
        login(email, password)
        history.push("/profile")
    }else{
      setText("There was a problem with registering. Please try again.")
    }
    // to do by you
};



  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onChange={handleChange} onSubmit={handleRegister}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="summonerName"
                label="Summoner Name"
                name="summonerName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" className="sign-in-link">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        {text}
        </div>

      </Grid>
    </Grid>
  );

}

