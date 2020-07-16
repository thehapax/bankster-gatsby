import React from "react"
import { graphql } from 'gatsby'

export const mylist = [];
export const mycurrency = [];
/*
const HomePage = ({data}) => {
  data.allAirtable.nodes.map(node => (
    mylist.push(node.data.Business_Name)
  ))
  data.allAirtable.nodes.map(node => (
    mycurrency.push(node.data.Currency_of_Penalty)
  ))
  return mylist
*/
  
const HomePage = ({data}) => {
  return(
    <>
    <div>
      Hello! This is the Total Count:
      {data.allAirtable.totalCount}

      {data.allAirtable.nodes.map(node => (
        <li> {node.data.Business_Name}, currency: 
         {node.data.Currency_of_Penalty}
        </li>
      ))}

    </div>
    </>
  )
  
}

export default HomePage


export const query = graphql`
query MyQuery {
  allAirtable {
    totalCount
    nodes {
      data {
        Business_Name
        Currency_of_Penalty
      }
    }
  }
}
`

/*
query BankNumberViolations {
  allAirtable {
    group(field: data___Business_Name) {
      fieldValue
      totalCount
    }
  }
}
*/

/*
// total violation counts per currency
query CurrencyCount {
  allAirtable {
    group(field: data___Currency_of_Penalty) {
      fieldValue
      totalCount
    }
  }
}
*/

/*
// Total Amount penalty per currency
query AmtCurrencyCount {
  allAirtable {
    group(field: data___Currency_of_Penalty) {
      fieldValue
      totalCount
    	edges{
        node{ 
        	data {
            Penalty_amount_in_native_currency
          }
        }
      }
    }
  }
}
*/


/*
import React from "react"
import { graphql } from "gatsby"


export default ({data}) => {
    const allAirtableData = data.allAirtable.nodes;
    return (
        <div>
          This is a test
          <ul>
            {
                allAirtableData.map((node) => (
                        <li> {node.data.Business_Name} - 
                        {node.data.Currency_of_Penalty}
                        </li>
                ))
            }
          </ul>
        </div>
    )
}

export const query = graphql`
  query MyQuery {
    allAirtable {
      edges {
        node {
          data {
            Business_Name
            Currency_of_Penalty
          }
        }
      }
    }
  }
`

*/
