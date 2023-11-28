import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Tabsd() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Invoicing" {...a11yProps(0)} />
          <Tab label="Accounting" {...a11yProps(1)} />
          <Tab label="Payments" {...a11yProps(2)} />
          <Tab label="Expenses" {...a11yProps(3)} />
          <Tab label="Reporting" {...a11yProps(4)} />
          <Tab label="Mobile" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <h3>Professional Invoicing</h3>
Impress clients with professional Invoices that clearly show the work you’ve done and what it costs…then, just click send. Oh, and use automated payment reminders to nudge clients for payment.
      <br/><br/><Link to="/Invoicing"> <Button variant='contained' sx={{backgroundColor:"#afc1c9",color:"black"}}>TRY IT FREE</Button></Link>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <h3>Keep an Eye on the Big Picture</h3>
Simple or complex, your finances tell you how your business is doing. BalanceBliss’ easy-to-use Double-Entry Accounting tools and reports show profitability, cash flow health, and details your spending.
<br/><br/> <Link to="/Accounting"><Button variant='contained' sx={{backgroundColor:"#afc1c9",color:"black"}}>TRY IT FREE</Button></Link>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <h3>Fast & Easy, for You and Your Clients</h3>
BalanceBliss’ automated online payment options (like automated recurring billing) let your clients pay their preferred way, and get you paid 2x faster.
<br/><br/><Link to="/Payments"><Button variant='contained' sx={{backgroundColor:"#afc1c9",color:"black"}}>TRY IT FREE</Button></Link> 
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <h3>Never Miss an Expense</h3>
BalanceBliss lets you snap receipt photos, forward email receipts to your account, and import expenses from your bank account. Then organize and assign them to clients. Tracking every dollar keeps you ready for tax time.
<br/><br/><Link to="/Expenses"><Button variant='contained' sx={{backgroundColor:"#afc1c9",color:"black"}}>TRY IT FREE</Button></Link>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <h3>Know Your Business Better</h3>
Easily track every dollar in and out of your business then run reports to see how your business is doing. And at tax time, do it yourself or just give your accountant access to quickly find what they need.
<br/><br/><Link to="/Report"><Button variant='contained' sx={{backgroundColor:"#afc1c9",color:"black"}}>TRY IT FREE</Button></Link>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
     <h3>Take BalanceBliss Anywhere</h3> 
Stay connected to your clients and team, even on the go. Send invoices, track expenses, and check on projects all with the BalanceBliss mobile app. Oh, and if you drive a lot for your business, check out Mileage Tracker.
<br/><br/><Link to="/Mobile"><Button variant='contained' sx={{backgroundColor:"#afc1c9",color:"black"}}>TRY IT FREE</Button></Link>
      </CustomTabPanel>
    </Box>
  );
}