import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import AfterLogin from './AfterLogin';
import { usercontext } from './Usercontext';
import { useContext } from 'react';
export default function Appbar() {
  const [user,setuser]=useContext(usercontext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"black"}}>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="success"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <Link to="/"><AccountBalanceSharpIcon sx={{color:"#afc1c9"}}/></Link> 
          </IconButton>
          <Typography variant="h6" component="div" sx={{fontFamily:"monospace", flexGrow: 1}}>
          BalanceBliss
          </Typography>
        {!user ? <Link to="/Login"> <Button sx={{textTransform:"none",backgroundColor:"#afc1c9",color:"black"}}size='small'  variant='contained'>Log in</Button></Link>:null }
        {!user ?<Link to="/Signup"><Button sx={{marginLeft:"10px",textTransform:"none",backgroundColor:"#afc1c9",color:"black"}} size='small'  variant='contained'>Sign up</Button></Link> :null }
         <Link to="/Contact"><Button sx={{marginLeft:"10px",textTransform:"none",backgroundColor:"#afc1c9",color:"black"}} size='small'  variant='contained'>Contact</Button></Link>
         <Link to="/About"><Button sx={{marginLeft:"10px",textTransform:"none",backgroundColor:"#afc1c9",color:"black"}} size='small' variant='contained'>About</Button></Link>
         {user ?<AfterLogin/>:null }
        </Toolbar>
      </AppBar>
    </Box>
  );
}