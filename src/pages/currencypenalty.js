import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable {
        group(field: data___Currency_of_Penalty) {
          fieldValue
          nodes {
            data {
              Business_Name
              Penalty_amount_in_native_currency
            }
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName

