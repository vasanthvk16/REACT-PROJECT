import React from 'react'
import Appbar from './Appbar';
import { Link } from '@mui/material';

const Contact = () => {
  return (
    <div style={{backgroundColor:"#afc1c9",height:"100vh",marginTop:"0px"}}>
    <div>
    <h1>Contact Us</h1>
    <h3>Customer Support</h3>
    <ul>
        <li>Phone: </li>
        <li>Email: </li>
        <li>Support Hours: Monday to Friday, 9:00 AM - 5:00 PM (IST)</li>
    </ul>
    <h3>Company Address</h3>
    <p >
       123 Accounting Street,
       Suite 101,
       COIMBATORE, TAMILNADU, Zip Code,
       INDIA
    </p>
    <h3>Follow Us On</h3>
    <ul>
        <li><Link href="#" sx={{textDecoration:"none"}}>Instagram</Link></li>
        <li><Link href="#" sx={{textDecoration:"none"}}>Twitter</Link></li>
        <li><Link href="#" sx={{textDecoration:"none"}}>Linkedin</Link></li>
    </ul>
    <h3>Privacy & Data Handling</h3>
    <ul>
        <li>Your privacy and data security are important to us. Read our<Link href="#" sx={{textDecoration:"none"}}> Privacy Policy</Link> for more information.</li>
    </ul>
    </div>
    </div>
  )
}
export default Contact;