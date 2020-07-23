import React from 'react'
//import useChartConfig from 'hooks/useChartConfig'
import { Chart } from 'react-charts'

export default () => {
/*
  const series = React.useMemo(
    () => ({
      type: "bar",
      options: {
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }]
        }
      }
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, position: "bottom", type: "time" },
      { position: "left", type: "linear", stacked: true }
    ],
    []
  );
  */

  return (
    <>
    <div style={{ width: "500px", height: "500px" }}>
    <Chart  data={mydata}    series={{ type: "bar" }}
    axes={[
      { primary: true, type: "ordinal", position: "left" },
      { position: "bottom", type: "linear", stacked: true },
    ]}
    tooltip
  />
  </div>
  </>
  )
}



export const mydata = [
    {
      label: "In App Purchase Income",
      datums: [
        { x: "2020", y: 9 },
        { x: "2019", y: 32 },
        { x: "2018", y: 35 },
        { x: "2017", y: 36 },
        { x: "2016", y: 38 },
        { x: "2015", y: 30 },
        { x: "2014", y: 29 },
      ],
    },
    {
      label: "Advertising Income",
      datums: [
        { x: "2020", y: 4 },
        { x: "2019", y: 3 },
        { x: "2018", y: 12 },
        { x: "2017", y: 14 },
        { x: "2016", y: 10 },
        { x: "2015", y: 9 },
        { x: "2014", y: 17 },
      ],
    },
  ]



export const stackedata = 
{
  labels: ['Risk Level'],
  datasets: [
    {
      label: 'Low',
      data: [67.8],
      backgroundColor: '#D6E9C6',
    },
    {
      label: 'Moderate',
      data: [20.7],
      backgroundColor: '#FAEBCC',
    },
    {
      label: 'High',
      data: [11.4],
      backgroundColor: '#EBCCD1',
    }
  ]
}

export const chartdata = 
{
  "NumberOfViolationsByType": [
      {
          "data": 1,
          "label": "Bribery"
      },
      {
          "data": 34,
          "label": "Fraud"
      },
      {
          "data": 33,
          "label": "Money Laundering"
      },
      {
          "data": 59,
          "label": "Procedural Violation"
      },
      {
          "data": 5,
          "label": "Racketeering"
      },
      {
          "data": 1,
          "label": "Sanction Violations"
      },
      {
          "data": 2,
          "label": "Terrorist Financing"
      }
  ]
}
