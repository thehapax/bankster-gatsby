import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import graphql2chartjs from 'graphql2chartjs';
import {Bar} from 'react-chartjs-2';
import {chartdata} from './chartdata'


//const ComponentName = () => {
export default() => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: {data: {Penalty_amount_in_native_currency: {ne: 0}}}) {
        group(field: data___Business_Name) {
          name: fieldValue
          nodes {
            data {
              data: Penalty_amount_in_native_currency
              label: Currency_of_Penalty
            }
          }
        }
      }
    }
  `)
//  const g2c = new graphql2chartjs(data.allAirtable, 'bar');
  const g2c = new graphql2chartjs(chartdata, 'bar');
  g2c.reform((datasetName, dataPoint) => {
    return {
      backgroundColor: 'rgba(74, 181, 235, 1)' // light blue fill
    }
  });
 //  return <pre>{JSON.stringify(data, null, 4)}</pre>
//    <pre>{JSON.stringify(chartdata, null, 4)}</pre>

 return (
    <>
     <pre>{JSON.stringify(data.allAirtable, null, 4)}</pre>
    <Bar data={g2c.data} options={{
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }]
        },
        layout: {
        padding: {
            top: 15,
            left: 15,
            right: 15,
            bottom: 15
        },
        },
        tooltips: {
        backgroundColor: "rgba(252, 104, 104, 0.8)" // hot pink background
        }, 
    }} />
    </>
  )

}

//export default ComponentName


