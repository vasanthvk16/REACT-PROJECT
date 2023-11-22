import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Appbar from './Appbar'
import himg from './himg4.jpeg'
import Footer from './Footer'
import InstagramIcon from '@mui/icons-material/Instagram';

const Home = () => {
  return(
    <>
    
    <div style={{height:"10px"}}>
      <marquee behavior="alternate" scrollamount="15" direction="right"><h3>"Get started today and experience the ease of superior accounting."</h3></marquee>
    </div>
    <div style={{backgroundImage:`url(${himg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat" ,width:"100vw",height:"700px"}}>
        <h1 style={{fontSize:"80px",lineHeight:"1.5"}}>Accounting Software Built for <br/>Business Owners and <br/>Accountants</h1>
    
    </div>
    <Stack direction={"column"} spacing={3}>
      <Box sx={{alignItems:"center",height:"40px"}}>
        <h1 style={{textAlign:"center"}}>Easy-to-Use Accounting & Bookkeeping Features</h1>
      </Box>
      <Box sx={{width:"100vw", height:"530px",backgroundColor:"#afc1c9"}}>
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