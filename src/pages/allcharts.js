import React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import USDPenalties from "./usdpenalty"
import ViolationsChart from "./violbar"
import CountryViolations from "./countryvio"
import CurrencyChart from "./currencychart"

export default () => {
  return(
    <>
    <Layout>
        <USDPenalties />
         <ViolationsChart />
         <CountryViolations />
         <CurrencyChart />
    </Layout>
    </>
    )
}

