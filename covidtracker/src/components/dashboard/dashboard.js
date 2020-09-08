import React,{useEffect,useState} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import style from './dashboard.module.css';
import {indiaTotalData} from '../../action/action'
import CountUp from 'react-countup';
import Navbar from '../navbar/navbar'
import Chart from '../chart/chart'

  
const Dashboard = () =>{
    const [data,setData] = useState('')

    useEffect(()=>{
    const fetchData = async()=>{
      const indiadata = await indiaTotalData()

      setData(indiadata.results.data[1])
      console.log(indiadata.results.data[1])
    }
    fetchData()
    },[data])
    return(
        <>
          <Navbar/>
          <h1 className={style.head}>Covid-19 cases in India</h1>
     <div className={style.rootl}>
    <Card className={style.root}>
      <CardContent>
        <Typography className={style.title} color="textSecondary" gutterBottom></Typography>
        <Typography variant="h4" component="h2">
            <CountUp start={0} end={data.active_cases?data.active_cases:0} duration={2.75} separator="," />
        </Typography>
        <Typography className={style.pos} color="textSecondary">
          Number of <strong style={{fontSize:"20px"}}>Active cases</strong> in India from COVID-19
        </Typography>
      </CardContent>
      </Card>
      {/*  */}
      <Card className={style.root2}>
      <CardContent>
        <Typography className={style.title} color="textSecondary" gutterBottom>
         
        </Typography>
        <Typography variant="h4" component="h2">
         
          <CountUp start={0} end= {data.recovered_cases?data.recovered_cases:0} duration={2.75} separator="," />
        </Typography>
        <Typography className={style.pos} color="textSecondary">
        Number of <strong style={{fontSize:"20px"}}>Recoveries</strong> in India from COVID-19
        </Typography>
      </CardContent>
      </Card>
      {/*  */}
      <Card className={style.root3}>
      <CardContent>
        <Typography className={style.title} color="textSecondary" gutterBottom>
         
        </Typography>
        <Typography variant="h4" component="h2">
         
          <CountUp start={0} end=  {data.death_cases?data.death_cases:0} duration={2.75} separator="," />
        </Typography>
        <Typography className={style.pos} color="textSecondary">
          Number of <strong style={{fontSize:"20px"}}>Deaths</strong> in India from COVID-19
        </Typography>
      </CardContent>
    </Card>
    </div>
    <Chart/>
</>
    )
}

export default Dashboard;















