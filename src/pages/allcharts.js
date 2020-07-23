import React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import ViolationsChart from "./violbar"
import CurrencyChart from "./currencypie"

export default () => {
  return(
    <>
    <Layout>
         <ViolationsChart />
         <CurrencyChart />
    </Layout>
    </>
    )
}

