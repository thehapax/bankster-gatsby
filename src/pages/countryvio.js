// list of Violations by Country
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import graphql2chartjs from 'graphql2chartjs';
import {Pie} from 'react-chartjs-2';
import {colorlist} from '../components/utils';


const CountryViolations = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: {data: {Currency_of_Penalty: {}}}) {
        ViolationsByCountry: group(field: data___Jurisdiction_of_Penalty) {
          label: fieldValue
          data: totalCount
        }
      }
    }
  `)
  const g2c = new graphql2chartjs(data.allAirtable, 'pie');
  g2c.reform((datasetName, dataPoint) => {
    return {
      backgroundColor: 'rgba(74, 181, 235, 1)' // light blue fill
    }
  });
  const elems = g2c.data['datasets'][0];

  var len = Object.keys(data.allAirtable.ViolationsByCountry).length
//  console.log("length of data")
//  console.log(len)

  elems['backgroundColor'] = colorlist(len)
  elems['borderWidth'] = 0
  g2c.data["datasets"] = [elems]
  
  return (
    <>
    <h1>Violations by Country</h1>
    <h3>Click on the legend below to hide or show datasets</h3>

    <Pie data={g2c.data}  options={{
      responsive: true,
      maintainAspectRatio: true,
      legend: {
          display: true,
          fullWidth: true,
          position: 'bottom',
        }
    }} />

    </>
  )
  
}

export default CountryViolations


