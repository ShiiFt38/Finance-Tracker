import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'

const MultiChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if(chartInstance.current){
            chartInstance.current.destroy()
        }
        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type:'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [
                    {
                  type: 'bar',
                  label: 'Income',
                  data: [8000, 10500, 8500, 9800, 7970,8025,6988,7992,8012,12983,8008,5990],
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgb(200, 50, 0)'
                }, {
                  type: 'line',
                  label: 'Expenses',
                  data: [6100,9800,7200,8500,6700,9300,7800,6900,9200,7500,8800,6400],
                  fill: false,
                  borderColor: 'rgb(54, 162, 235)'
                }]
              }
        })
        return () => {
            if(chartInstance.current){
                chartInstance.current.destroy()
            }
        }
    },[]);


  return (
    <div className='h-[400px] w-full flex plcae-content-center'> <canvas className='mx-auto' ref={chartRef}/> </div>
  )
}

export default MultiChart