import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {stateData} from '../../../action/action'
import style from './card.module.css'
import Navbar from '../../navbar/navbar'
import CountUp from 'react-countup';



const useStyles = makeStyles({
  root: {
    width: '50%',
  },
  container: {
    maxHeight: 440,
  },
});

const StickyHeadTable = ()=> {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [data,setData] = useState('')
  const [d,currentDate] =useState('')

    useEffect(()=>{
    const fetchData = async()=>{
      const indiadata = await stateData()

      setData(indiadata.state.data[1].state_data)
      console.log(indiadata.state.data[1].state_data)
    }
    fetchData()
    },[data])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(()=>{
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    currentDate(date)
  })
  return (
      <>
      <Navbar/>
      <h1 className={style.head}>The following is the list of Cases in each of India</h1>
      <label style={{color:'grey'}}>updated on {d}</label>
    <div className={style.container}>
    <Paper className={style.pp} style={{ width: '80%',marginTop:'30px',height:'500px' }}>
      <TableContainer className={classes.container} >
        <Table style={{ width: '100%' }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell><b>State</b></TableCell>
            <TableCell align="right"><b>Active cases</b></TableCell>
            <TableCell align="right"><b>Recovered cases</b></TableCell>
            <TableCell align="right"><b>Death cases</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover  tabIndex={-1} >
                      <TableCell component="th" scope="row">{row.state}</TableCell>
                      <TableCell align="right"><CountUp start={0} end={row.active?row.active:0} duration={1.00} separator="," /></TableCell>
                      <TableCell align="right"><CountUp start={0} end={row.recovered?row.recovered:0} duration={1.00} separator="," /></TableCell>
                      <TableCell align="right"><CountUp start={0} end={row.deaths?row.deaths:0} duration={1.00} separator="," /></TableCell></TableRow>
              );
            }):""}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[7,10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
    </>
  );
}
export default StickyHeadTable;