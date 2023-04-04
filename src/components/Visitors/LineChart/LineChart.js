import React from 'react';
import './LineChart.css';
import { Line } from 'react-chartjs-2';

const LineChart = ({dataArr}) => {
 
    return (
      <div className="LineChart">
           <Line data={dataArr}  width="800px !important" height="350px !important"/>
      </div>
    );
}
export default LineChart;