import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Stack } from '@mui/material';

const Footer = () => {
  return (
    <div style={{display:"flex", backgroundColor:"black",height:"50px",alignItems:"center"}}>
    <h5 style={{color:"white"}}>© Copyrights 2023.All rights reserved</h5>
    <Stack sx={{display:"flex",alignItems:"center",direction:"cloumn"}}>
      <InstagramIcon sx={{color:"#afc1c9"}}/>
      <TwitterIcon sx={{color:"#afc1c9"}}/>
    </Stack>
  </div>
  )
}
export default Footer