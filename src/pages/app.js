import React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import ViolationsChart from "./violbar"
import CurrencyChart from "./currencypie"

export default () => {
  return(
    <>
    <Layout>
        <div>
         <h1> This is the app.js page header </h1>
         <p>insert body text here in a paragraph
           lorem ipsum dolor ipset
         </p>
         <ViolationsChart />
         <CurrencyChart />
        </div>
    </Layout>
    </>
    )
}

