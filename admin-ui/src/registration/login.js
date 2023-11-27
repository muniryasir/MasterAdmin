import React from "react";
import './login.css';
import axios from 'axios';
import sendDBPackage from '../service/utility.js';

import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';

import {
        Button,
        TextField,
        Grid,
        Paper,
        AppBar,
        Typography,
        Toolbar,
        Link,
    } from "@material-ui/core";
// import {BRAND_NAME} from '../constants'


class Login extends React.Component {


constructor(props) {
    super(props);
    this.state = { username: "", password:"", authflag:1 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

// setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     let expires = "expires="+d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }
  
// getCookie(cname) {
//     let name = cname + "=";
//     let ca = document.cookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
  
// checkCookie(value) {
//     let user = getCookie(value);
//     if (user != "") {
//       alert("Welcome again " + user);
//     } else {
//       user = prompt("Please enter your name:", "");
//       if (user != "" && user != null) {
//         setCookie("username", user, 365);
//       }
//     }
//   }
handleChange(event) {
    this.setState({ username: event.state.username, password: event.state.password });
}
handleSubmit(event) {
    event.preventDefault();
    const user = {
        username: this.state.username,
        password: this.state.password
      };

       axios.post(`http://8.211.60.39:3001/checkuser`, { user })
      .then(res => {
        // console.log(res);
        console.log(res.data);
        let pass = res.data.message;
        
            if(pass == 1) {
                    localStorage.setItem("user", JSON.stringify(user));
                    // setCookie('user', JSON.stringify(user), 1)
                    // checkCookie('user');
                    sendDBPackage()
                    window.location.href = '/dashboard'
          }
      })
    
    // if (this.state.username == 'admin@littech.in' && this.state.password == 'secret') {
    //     this.props.history.push("/home");
    // } else {
    //     alert('Incorrect Credntials!');
    // }
}
render() {
    return (
    <div>
    <AppBar position="static" alignitems="center" color="primary">
    <Toolbar>
    <Grid container justify="center" wrap="wrap">
      <Grid item>
        <Typography variant="h6">Login</Typography>
      </Grid>
    </Grid>
    
    </Toolbar>
    </AppBar>
        <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
            <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className="login-form"
            >
                <Paper
                    variant="elevation"
                    elevation={2}
                    className="login-background"
                >
            <Grid item>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            </Grid>
        <Grid item>
    
    <form onSubmit={this.handleSubmit}>
     
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <TextField
                    type="email"
                    placeholder="Email"
                    fullWidth
                    name="username"
                    variant="outlined"
                    value={this.state.username}
                    onChange={(event) =>
                    this.setState({
                    [event.target.name]: event.target.value,
                    })
                    }
                    required
                    autoFocus
                    />
            </Grid>
        
        <Grid item>
    
            <TextField
                type="password"
                placeholder="Password"
                fullWidth
                name="password"
                variant="outlined"
                value={this.state.password}
                onChange={(event) =>
                this.setState({
                [event.target.name]: event.target.value,
                })
                }
                required
                />
        </Grid>
    
        <Grid item>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                className="button-block"
                >
                Submit
            </Button>
        </Grid>
    </Grid>
    
    </form>
    </Grid>
    
    <Grid item>
        <Link href="/forgotpassword" variant="body2">
            Forgot Password?
        </Link>
    </Grid>

    <Grid item>
        <Link href="/signup" variant="body2">
            Create Account
        </Link>
    </Grid>
    
    </Paper>
    </Grid>
    </Grid>
    </Grid>
    </div>
    );
    }
}
export default Login;