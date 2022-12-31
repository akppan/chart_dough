import React from 'react';
import {Card} from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

import { Chart, registerables, ArcElement } from "chart.js";
Chart.register(...registerables);
Chart.register(ArcElement);

const ChartView = props => {
    let chartData = props.chartdata;
    let len = Object.keys(chartData).length

    let data = [9, 5, 3]
    let labels = ["Newly Added", "Edited", "Deleted"]
    if(len!==0){
      labels = []
      data = []
      Object.keys(chartData).forEach(key=>{
        labels.push(key);
        data.push(chartData[key])
      })
    }
    
    let bgColors = ["#83ce83","#959595","#f96a5d","#00A6B4","#6800B4",]
    
    if(len!==0){
      bgColors = []
      for(let i=0;i<len;i++){
        bgColors.push("#"+(Math.floor(Math.random()*16777215).toString(16)));
      }
    }

    let customLabels = labels.map((label,index) =>`${label}: ${data[index]}`)

    const chartdata = {
      labels: customLabels,
      datasets: [
        {
          label: "Markets Monitored",
          backgroundColor: bgColors,
          data: data,
        },
      ],
    };
    return (
        <Doughnut
          data={chartdata}
          options={{
            legend: { display: true, position: "right" },
  
            datalabels: {
              display: true,
              color: "white",
            },
            tooltips: {
              backgroundColor: "#5a6e7f",
            },
          }}
        />
      );
}

const LeftContent = props => {
    return (
        <div style={{display:'inline-block'}}>
        <div style={{display:'inline-block',width:'300px',margin:'5px',padding:'10px'}}><Card><ChartView chartdata={props.dish}/></Card></div>
        <div style={{display:'inline-block',width:'300px',margin:'5px',padding:'10px'}}><Card><ChartView chartdata={props.location}/></Card></div>
        <div style={{display:'inline-block',width:'300px',margin:'5px',padding:'10px'}}><Card><ChartView chartdata={props.action}/></Card></div>
        </div>
    )
}

export default LeftContent;