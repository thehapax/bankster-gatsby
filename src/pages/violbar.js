import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import graphql2chartjs from 'graphql2chartjs';
import {Bar} from 'react-chartjs-2';


const ViolationsChart = () => {
  const data = useStaticQuery(graphql`{
      allAirtable {
        NumberOfViolationsByType: group(field: data___Reported_Violation) {
          data: totalCount
          label: fieldValue
        }
      }
    }
  `)
  const g2c = new graphql2chartjs(data.allAirtable, 'bar');
  g2c.reform((datasetName, dataPoint) => {
    return {
      backgroundColor: 'rgba(74, 181, 235, 1)' // light blue fill
    }
  });
  return (
    <>
    <h1>Banksters - Types of Violations</h1>
    <Bar data={g2c.data} options={{
        responsive: true,
        maintainAspectRatio: true,
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

  //<pre>{JSON.stringify(g2c.data, null, 4)}</pre>
}

export default ViolationsChart

