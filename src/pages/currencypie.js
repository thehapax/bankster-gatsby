import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import graphql2chartjs from 'graphql2chartjs';
import {Doughnut} from 'react-chartjs-2';
import {colorlist} from './utils';

const CurrencyChart = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable {
        ViolationsByCurrency: group(field: data___Currency_of_Penalty) {
          label: fieldValue
          data: totalCount
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
      // force add background color into dataset, since g2c add doesn't seem to work
      const elems = g2c.data['datasets'][0];

      console.log("length of data")
      var len = Object.keys(data.allAirtable.ViolationsByCurrency).length
  
      elems['backgroundColor'] = colorlist(len)
      elems['borderWidth'] = 0
      g2c.data["datasets"] = [elems]
  

  return (
    <>
    <h1>Violations by Currency</h1>
    <Doughnut data={g2c.data}  options={{
      responsive: true,
      maintainAspectRatio: true,
      legend: {
          display: true,
          fullWidth: true,
          position: 'left',
        }
    }} />
    </>
  )
}

export default CurrencyChart