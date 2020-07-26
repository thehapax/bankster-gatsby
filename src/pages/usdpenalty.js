import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {colorlist} from './utils';
import {Doughnut} from 'react-chartjs-2';

const USDPenalties = () => { 
  const data = useStaticQuery(graphql`
    {
      allAirtable(sort: {fields: data___Business_Name}, filter: {data: {Penalty_amount_in_native_currency: {ne: 0}}}) {
        distinct(field: data___Business_Name)
        nodes {
          data {
            amount: Penalty_amount_in_native_currency
            name: Business_Name
            juris: Jurisdiction_of_Penalty
          }
        }
      }
    }
  `)
  var len = Object.keys(data.allAirtable.nodes).length
  console.log("length of list")
  console.log(len)

  var mynodes = data.allAirtable.nodes
  var keys = Object.keys(mynodes)
  var df = [];
  for (let n=0; n < keys.length; n++) {
    df.push(data.allAirtable.nodes[n].data)
  }  

  let distinct = data.allAirtable.distinct
  console.log(distinct)

  let newcolor =  colorlist(len)
  var currency = 'USD'
  let mytotals = []
  let juris = []

  for (let n=0; n < distinct.length; n++) {
    let name = distinct[n]
    let amount = 0
    for (let i=0; i < df.length; i++) {
      if (name === df[i].name) {
        amount = amount + df[i].amount
      }
    }
    mytotals.push(amount)
    juris.push(df[n].juris)
  }

  const mdata = {
    labels: distinct,
    datasets: [{
        label: 'Penalty in '+currency,
        backgroundColor: newcolor,
        borderWidth: 0,
        data: mytotals,
    }]
  }

//  console.log(mdata)
// return <pre>{JSON.stringify(juris, null, 4)}</pre>
 return (
  <>
  <h1>Bank Violations by USD</h1>
  <Doughnut data={mdata}  options={{
    responsive: true,
    maintainAspectRatio: true,
    legend: {
        display: false,
        fullWidth: true,
        position: 'bottom',
      }
  }} />
  </>
  )

}

export default USDPenalties


