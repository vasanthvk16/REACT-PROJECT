import { Avatar, Box, Button, Checkbox, Grid, Paper, TextField, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import bimg from './himg3.png';
import { Link, useInRouterContext, useNavigate } from 'react-router-dom';
import { useContext, useRef } from "react";
import axios from "axios";
import { usercontext } from "./Usercontext";

const Login = () => {
    const [user,setuser]=useContext(usercontext);
    const paperstyle = { padding: 20, height: '400px', width: 300, margin: "0px auto" }
    const avatarstyle = { backgroundColor: '#6cdb0e' }
    const emailref = useRef("");
    const passref = useRef("");
    let validuser = true;
    let validpassword = true;
    let isFill = false;
    let password = "";
    const navigate = useNavigate();
    const handlesubmit = (event) => {
        event.preventDefault();
        if (emailref.current.value.trim()) {
            isFill = true;
        }
        else {
            isFill = false;
        }
        if (isFill) {
            axios.get(`http://localhost:4300/users?email=${emailref.current.value}`)
                .then((response) => {
                    if (response.data[0]) {
                        validuser = true;
                        password = response.data[0].password;
                        if (passref.current.value === password) {
                            setuser(response.data[0].name);
                            navigate("/");

                        }
                        else {
                            validpassword = false;
                        }
                    }
                    else {
                        validuser = false;
                    }

                }).catch()
        }
    };
    return (
        <>

            <div style={{  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundImage: `url(${bimg})`,backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"cover", height: "90vh",backgroundColor:"#afc1c9"  }}>
                <Paper elevation={67} style={paperstyle}>
                    <Grid align='center' spacing={3}>
                        <Avatar style={avatarstyle}><PersonOutlineOutlinedIcon /></Avatar>
                        <h2>Sign in</h2>
                        <br></br>
                    </Grid>
                    <form onSubmit={handlesubmit}>
                        <TextField inputRef={emailref} label="Email" placeholder="Enter Your Email" type="email"
                            helperText={(!validuser ? "User not found" : null)} fullWidth required />
                        <br></br>
                        <br></br>
                        <TextField inputRef={passref} label="Password" placeholder="Enter Password" type="password"
                            helperText={(!validpassword ? "please enter correct password" : null)} fullWidth required />
                        <br></br>
                        <br></br>
                        
                        <Button type="submit" color="primary" variant="contained" fullWidth>Sign in</Button>
                    </form>
                    <br></br>
                    <br></br>
                    <Typography>
                        <Link href="#">Forgot password ?</Link>
                    </Typography>

                    <Typography>
                        Do you have an account ?
                        <Link to='/Signup'>Sign Up</Link>
                    </Typography>
                </Paper>
            </div></>
    );
};
export default Login;