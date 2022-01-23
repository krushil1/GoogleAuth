import * as React from "react";
// import { signInWithGoogle } from './c';
import './Header.css';
import './Firebase.css';

import { signInWithGoogle } from "./Firebase";

// importing material UI components
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
    const user = localStorage.getItem("name");
    const date = new Date();
    const hour = date.getHours();
    return (
        // <AppBar position="static">
            <Toolbar className="main">
            {/*Inside the IconButton, we
            can render various icons*/}
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton> 

            {/* The Typography component applies
            default font weights and sizes */}

            <Typography variant="h6"
                component="div" sx={{ flexGrow: 1 }}>                
                {user && <h5 className="userText">{hour < 12 ? `Good Morning ${user}, welcome back!` : `Good evening ${user}, welcome back!`}</h5>}
                {!user && <h5 className="userText">Please sign in!</h5>}
            </Typography>
            {/* <h1 className='userText'>{localStorage.getItem("name")}</h1>
            <h1 className='userText'>{localStorage.getItem("email")}</h1>
            <h1>{localStorage.getItem("msg")}</h1> */}
            
            {/* Show user profile if logged in */}
            {user && <img className='profilePic' src={localStorage.getItem("profilePic")} />}

            {/* Show login button if not logged in */}
            {!user && <button className='login-with-google-btn' onClick={signInWithGoogle}> Sign In With Google</button>}

            </Toolbar>
        // </AppBar>
    );
}

