import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from "@mui/material";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import bimg from './himg3.png';
import {Link, useNavigate} from 'react-router-dom';
import Appbar from "./Appbar";
import axios from 'axios';
import { useRef, useState } from "react";
const Signup=()=>{
    const paperstyle={padding:20,height:'500px',width:300,margin:"0px auto",padding:"20px"}
    const avatarstyle={backgroundColor:'#6cdb0e'}
    const nameref=useRef("");
    const emailref=useRef("");
    const passref=useRef();
    const conpassref=useRef();
    const navigate=useNavigate();
    let checkpass=false;
    const handlesubmit=(event)=>{
        event.preventDefault();
        if(passref.current.value===conpassref.current.value){
            checkpass=true;
        }
        else{
            checkpass=false;
        }
        if(checkpass){
        axios.post("http://localhost:4300/users",{
            name:nameref.current.value,
            email:emailref.current.value,
            password:passref.current.value,
    
        }).then(alert("Your Account created successfully."))
        .catch();
        navigate("/Login");
    }
    else{
        alert("password did not match");
    }
    }


    return(
        <>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundImage: `url(${bimg})`,backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"cover", height: "90vh",backgroundColor:"#afc1c9" }}>
            <Paper elevation={67} style={paperstyle} variant="outlined" square={false}>
                <Grid align="center" spacing={10}>
                    <Avatar style={avatarstyle}><PersonAddAltOutlinedIcon /></Avatar>
                    <h2 style={{ color: "black" }}>Sign up</h2>
                </Grid>
                <form onSubmit={handlesubmit}>
                <TextField inputRef={nameref} label="UserName" fullWidth required sx={{ color: "white" }} />
                <br></br>
                <br></br>
                <TextField inputRef={emailref} label="Email" type="email" fullWidth required sx={{ color: "white" }} />
                <br></br>
                <br></br>
                <TextField inputRef={passref} label="Password" type="password" fullWidth required sx={{ color: "white" }} />
                <br></br>
                <br></br>
                <TextField  inputRef={conpassref} label="Confirm-Password" type="password" fullWidth required sx={{ color: "white" }} />
                <br></br>
                <br></br>
                <Button type="submit" color="primary" variant="contained" fullWidth>Sign up</Button>
                <br></br>
                <br></br>
                </form>
                <Typography>
                    Already have an account ?
                    <Link to="/Login">Sign In</Link>
                </Typography>
            </Paper>

        </div>
        </>
        
    );
};
export default Signup;