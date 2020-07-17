// todo: HorizontalBar, Doughnut 
// light blue fill : rgb(74, 181, 235)
// hot pink fill: rgb(252, 104, 104)
//return JSON.stringify(data.allAirtable.group, null, 4)
//return JSON.stringify(g2c.data)

import React from "react"
import graphql2chartjs from 'graphql2chartjs';
import {Bar} from 'react-chartjs-2';
import { graphql } from 'gatsby'

export default ({ data }) => {
  const g2c = new graphql2chartjs(data.allAirtable, 'bar');
  g2c.reform((datasetName, dataPoint) => {
    return {
      backgroundColor: 'rgba(74, 181, 235, 1)' // light blue fill
    }
  });
 return( 
  <>
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



/*
import React from "react"
import { graphql } from 'gatsby'

const HomePage = ({data}) => {
    var groupdata = {}
    data.allAirtable.group.forEach(({fieldValue, totalCount}) => {
        groupdata.push(fieldValue)
    })

    return(
      <>
     <div> 
         Group
     </div>
      <div>
        Hello! This is the list:
        {data.allAirtable.group.map(node => (
          <li> {node.fieldValue}, Number Violations: 
           {node.totalCount}
          </li>
        ))}
      </div>
      </>
    )
}

export default HomePage

export const query = graphql`
query AmtCurrencyCount {
    allAirtable {
      group(field: data___Currency_of_Penalty) {
        fieldValue
        totalCount
      }
    }
  }
 ` 

 */