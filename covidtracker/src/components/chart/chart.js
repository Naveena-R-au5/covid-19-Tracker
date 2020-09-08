import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {indiaStateData} from '../../action/action'
import style from './chart.module.css'

const Chart=()=>{
    const [chartdata,setChartData] = useState([])

    useEffect(()=>{
    const fetchData = async()=>{
      const indiadata = await indiaStateData()

      setChartData(indiadata.result.data.cases_time_series)
      console.log("data",indiadata.result.data.cases_time_series)
    }
    fetchData()
    },[])

    const lineChart = (
        chartdata.length !==0 ? (
          <Line className={style.container} 
            data={{
              labels:chartdata.map((data) => data.date),
              datasets: [{
                data:  chartdata.map((data) => data.dailyconfirmed),
                label: 'Active',
                borderColor:"rgb(114, 212, 212)",
                backgroundColor: '#BDEDFF',
                fill: true,
              }, {
                data: chartdata.map((data) => data.dailyrecovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: '#90EE90',
                fill: true,
              },
              {
                data: chartdata.map((data) => data.dailydeceased),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },
              ],
              
            }}
          />
        ) : null
      );
    return(
        <div>
            {lineChart }
        </div>

    )
}

export default Chart;