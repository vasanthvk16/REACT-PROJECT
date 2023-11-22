import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid,  Paper, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import bimg from './himg6.jpeg';
import {Link} from 'react-router-dom';
import Appbar from "./Appbar";
const Login=()=>{
    const paperstyle={padding:20,height:'400px',width:300,margin:"0px auto"}
    const avatarstyle={backgroundColor:'#6cdb0e'}
    return(
        <>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundImage: `url(${bimg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", height: "90vh" }}>
            <Paper elevation={67} style={paperstyle}>
                <Grid align='center' spacing={3}>
                    <Avatar style={avatarstyle}><PersonOutlineOutlinedIcon /></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField label="UserName" placeholder="Enter UserName" fullWidth required />
                <br></br>
                <br></br>
                <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Remember me" />
                <Button type="submit" color="primary" variant="contained" fullWidth>Sign in</Button>
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