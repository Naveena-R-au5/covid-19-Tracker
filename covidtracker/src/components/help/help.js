import React,{useEffect,useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {contactData } from '../../action/action'
import style from './help.module.css'
import Navbar from '../navbar/navbar'

const SimpleTable=()=> {
  const [cdata,setcData] = useState('')

  useEffect(()=>{
  const fetchcontactData = async()=>{
    const indiacontactdata = await contactData()

    setcData(indiacontactdata.contact.data[1])
    console.log(indiacontactdata.contact.data[1])
  }
  fetchcontactData()
  },[cdata])


  return (
      <>
      <Navbar/>
      <h1 className={style.head}>Helpline Numbers in India</h1>
      <div className={style.container}>
    <TableContainer component={Paper} className={style.cont}  style={{ width: '60%',marginTop:'30px',height:'500px' }}>
      <Table style={{ width: '100%' }}  className={style.tab} stickyHeader aria-label="sticky table" >
        <TableHead>
          <TableRow >
            <TableCell><b>State</b></TableCell>
            <TableCell align="right"><b>Helpline number</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {cdata?cdata.contact_details.map((row) => (
            <TableRow style={{padding:'40px'}} key={row.state_or_UT}>
              <TableCell component="th" scope="row">
                {row.state_or_UT}
              </TableCell>
              <TableCell align="right">{row.helpline_number}</TableCell>
            </TableRow>
          )):'null'}
        </TableBody>
      </Table>
    </TableContainer>
</div>

<div className={style.footer}>
<div className={style.copy}>
          <p>copyright@covid-2020</p>
    </div> 
   <div className={style.footele}>
          <p>Email : {cdata.helpline_email}</p>
          <p>Number : {cdata.helpline_number}</p>
          <p><a href={cdata.source} style={{textDecoration:'none',color:'white'}}>Resource</a></p>
          <p>Toll-free number : {cdata.toll_free}</p>
    </div>
</div>
  </> 
  );
}
export default  SimpleTable;