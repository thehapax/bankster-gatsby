import React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import ViolationsChart from "./violbar"
import CurrencyChart from "./currencypie"
import CountryViolations from "./countryvio"

export default () => {
  return(
    <>
    <Layout>
         <CurrencyChart />
         <ViolationsChart />
         <CountryViolations />
    </Layout>
    </>
    )
}

