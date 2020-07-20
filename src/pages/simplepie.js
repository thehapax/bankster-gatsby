import React from "react"
import {Doughnut} from 'react-chartjs-2';
import graphql2chartjs from 'graphql2chartjs';
import { graphql } from 'gatsby'
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"


export default ({data}) => {
    const g2c = new graphql2chartjs(data.allAirtable, 'pie');
    const datainput = g2c.data
    // force add background color into dataset, since g2c add doesn't seem to work
    const elems = datainput['datasets'][0];
    elems['backgroundColor'] = [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)'
    ]
    elems['borderWidth'] = 0
    g2c.data["datasets"] = [elems]

    return (
      <>
      <Layout>
        <h1>Doughnut chart</h1>
        <Doughnut data={g2c.data}  options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  legend: {
                      display: true,
                      fullWidth: true,
                      position: 'left',
                    }
          }} />  
      </Layout>
      </>
    )
   //  return JSON.stringify(g2c.data, null, 4)
}


export const query = graphql`
{
  allAirtable {
    NumberOfViolations: group(field: data___Currency_of_Penalty) {
      label: fieldValue
      data: totalCount
    }
  }
}
`


/*

export default ({ data }) => {
  const g2c = new graphql2chartjs(data.allAirtable, 'pie');
  // unclear why reform does not work for setting background color
  g2c.reform((datasetName, dataPoint) => {
    return {
      backgroundColor:
      [
          'rgba(74, 181, 235, 1)', 
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
     ], 
      hoverBackgroundColor: [
        'rgba(252, 104, 104, 0.8)',
      ]
    }
  });
 return( 
  <>
    <Doughnut data={g2c.data} options={{
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
}

// total violation counts per currency
export const query = graphql`
  {
    allAirtable {
      NumberOfViolations: group(field: data___Currency_of_Penalty) {
        label: fieldValue
        data: totalCount
      }
    }
  }
`

*/