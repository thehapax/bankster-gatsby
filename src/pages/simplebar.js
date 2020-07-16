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