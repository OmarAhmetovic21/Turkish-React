import React from "react";
// react plugin used to create switch buttons
import { BrowserView, MobileView} from 'react-device-detect';

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
}from 'chart.js';

import { Bar } from "react-chartjs-2";

// core components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

// core components

function BasicElements() {
  

  const data = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Passengers per year',
        data: [75200000, 74300000, 28000000, 44800000, 71820000],
        backgroundColor: '#c70a0c',
        borderColor: '#c70a0c',
        borderWidth: 2
      }
    ]
  };
  const options = {

  };

  const data2 = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Flights per year',
        data: [460000, 480000, 250000, 350000, 400000],
        backgroundColor: '#c70a0c',
        borderColor: '#c70a0c',
        borderWidth: 2
      }
    ]
  };
  return (
    <>
      <div className="section section-basic" id="basic-elements">
    <Container>
      <BrowserView>
      <h2 style={{marginTop:"10%", color:"black"}}><b>Turkish Airlines Statistics</b></h2>
      </BrowserView>

      <MobileView>
      <h3 style={{marginTop:"10%", color:"black", textAlign:"center"}}><b>Turkish Airlines Statistics</b></h3>
      </MobileView>
      
      
         <Row>
         <Bar options={options} data={data} />
         </Row>

         <Row style={{marginTop:"10%"}}>
         <Bar options={options} data={data2} />
         </Row>
          
        </Container>
      
      </div>
    </>
  );
}

export default BasicElements;
