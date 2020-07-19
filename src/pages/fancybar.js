import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allAirtable(filter: {data: {Penalty_amount_in_native_currency: {ne: 0}}}) {
      group(field: data___Business_Name) {
        total: totalCount
        bank: fieldValue
        nodes {
          data {
            PenaltyAmount: Penalty_amount_in_native_currency
            Currency: Currency_of_Penalty
          }
        }
      }
    }
  }
`

export default ComponentName

