import { Box, Container, Stack, Typography,Button } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Appbar from './Appbar'
import bimg from './himg.jpg'
import himg from './himg4.jpg'
import Footer from './Footer'
import InstagramIcon from '@mui/icons-material/Instagram';
import Tabsd from './Tabsd'
import { usercontext } from './Usercontext'
const Home = () => {
  const [user,setuser]=useContext(usercontext);
  return(
    <>
    <div style={{height:"2px",display:"flex", justifyContent:"center"}}>
      {user ? <h2>Welcome back to your financial hub! {user} </h2> : <h2>Unlock seamless financial management. Log in to your account now!</h2>}
    </div>
    <div style={{backgroundImage:`url(${himg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat" ,width:"100vw",height:"700px"}}>
        <h1 style={{fontSize:"80px",lineHeight:"1.5"}}>Accounting Software Built for <br/>Business Owners and <br/>Accountants</h1>
        {user ?<div><h3>Add your Details</h3>
          <Link to="/Details"> <Button variant='contained'>Add Details</Button></Link>
          </div> :null}
    </div>
    <Stack direction={"column"} spacing={3}>
      <Box sx={{alignItems:"center",height:"40px"}}>
        <h1 style={{textAlign:"center"}}>Easy-to-Use Accounting & Bookkeeping Features</h1>
      </Box>
      <Box sx={{backgroundColor:"#afc1c9",height:"300px",alignItems:"center"}}>
      <Tabsd/>
      </Box>
      <Box>
        
      </Box>
      <Box sx={{width:"100vw", height:"530px",backgroundColor:"#afc1c9",marginTop:"0px"}}>
         <Typography variant='h5' sx={{lineHeight:"2.5",letterSpacing:"2",marginLeft:"20px"}}>
        Welcome to "BalanceBliss" , where financial management meets simplicity. Take control of your finances effortlessly, streamline your transactions, and gain valuable insights with our intuitive tools. Whether you're a business owner, freelancer, or managing personal finances, our platform is tailored to empower you on your financial journey. Join us to experience seamless accounting and make informed decisions with confidence.
        <br/>
        With our robust suite of features, you can generate detailed reports, analyze trends, forecast budgets, and customize categories to align perfectly with your financial goals. Rest assured, your data's security is our top priority—we implement stringent measures to safeguard your sensitive information.
        </Typography>
      </Box>
      
    </Stack>
    <Footer/>
</>
  )
}

export default Home