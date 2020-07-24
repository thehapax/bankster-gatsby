import React from "react"

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyPxiCkqyARRVgUj'}).base('apppLYuOlVHjdv4w3');
var table_name = "Bank List";
var table = base.table(table_name);

export const getData = async() => {
    const storePosts = [];
    const records = await table.select({
        // filterByFormula: `{Business Name} = "${biz}"`,
      filterByFormula: `{Amount in native currency} > 0`,
      sort: [{field: "Business Name", direction: "asc"}],
      view: "All Data View",
      fields: ["Business Name", "Amount in native currency", "Currency of Penalty"]
    }).all()
    records.forEach(function(record) {
        if (typeof record.get('Business Name') !== "undefined") {
            storePosts.push(record.get('Business Name'))
        }
    });
    return storePosts 
}

export default ({data}) => {
//   let myData = await getData('Deutsche Bank')
   // console.log(myData)
    return (
        <>
         <pre>{data}</pre>
        </>
    )

}

