import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {Doughnut} from 'react-chartjs-2';
import {colorlist} from '../components/utils';

/*
export function colorlist(size) {
  var colors = [
    'rgba(255, 99, 132, 0.7)',
    'rgba(54, 162, 235, 0.7)',
    'rgba(255, 206, 86, 0.7)',
    'rgba(75, 192, 192, 0.7)',
    'rgba(153, 102, 255, 0.7)',
    'rgba(255, 159, 64, 0.7)',
    ]
    
    var newcolor = [];
    var repeat = Math.floor(size/6) +1
    console.log("size")
    console.log(size)
    console.log("repeater")
    console.log(repeat)
    
    for (let i=0; i < repeat; i++) {
      for (let n = 0 ; n< 6; n++)
        newcolor.push(colors[n])
    }
    return newcolor
}
*/


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
 //  console.log("length of list")
 // console.log(len)

  var mynodes = data.allAirtable.nodes
  var keys = Object.keys(mynodes)
  var df = [];
  for (let n=0; n < keys.length; n++) {
    df.push(data.allAirtable.nodes[n].data)
  }  

  let distinct = data.allAirtable.distinct
  // console.log(distinct)

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


