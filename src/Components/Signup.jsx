import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from "@mui/material";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import bimg from './himg3.jpeg';
import {Link} from 'react-router-dom';
import Appbar from "./Appbar";
const Signup=()=>{
    const paperstyle={padding:20,height:'400px',width:300,margin:"0px auto",padding:"20px"}
    const avatarstyle={backgroundColor:'#6cdb0e'}
    return(
        <>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundImage: `url(${bimg})`,backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"cover", height: "90vh",backgroundColor:"#afc1c9" }}>
            <Paper elevation={67} style={paperstyle} variant="outlined" square={false}>
                <Grid align="center" spacing={10}>
                    <Avatar style={avatarstyle}><PersonAddAltOutlinedIcon /></Avatar>
                    <h2 style={{ color: "black" }}>Sign up</h2>
                </Grid>
                <TextField label="UserName or Email" fullWidth required sx={{ color: "white" }} />
                <br></br>
                <br></br>
                <TextField label="Password" type="password" fullWidth required sx={{ color: "white" }} />
                <br></br>
                <br></br>
                <TextField label="Confirm-Password" type="password" fullWidth required sx={{ color: "white" }} />
                <br></br>
                <br></br>
                <Button type="submit" color="primary" variant="contained" fullWidth>Sign up</Button>
                <br></br>
                <br></br>
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