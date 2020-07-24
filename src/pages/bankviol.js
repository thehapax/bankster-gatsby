import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import graphql2chartjs from 'graphql2chartjs';
//import {HorizontalBar} from 'react-chartjs-2';

// Total Penalty by Bank USD

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: {data: {Currency_of_Penalty: {eq: "USD"}}}) {
       group(field: data___Business_Name) {
          label: fieldValue
           nodelink: nodes {
            source: data {
              data: Penalty_amount_in_native_currency
              country: Jurisdiction_of_Headquarters
            }
          }
        }
      }
    }
  `)
  const g2c = new graphql2chartjs(data.allAirtable, 'pie');
  return (
    <>
    <h1>Total Penalty by Bank USD</h1>
    <pre>{JSON.stringify(g2c.data, null, 4)}</pre>
    </>
  ) 
}

export default ComponentName

