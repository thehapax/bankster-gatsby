import React from "react"
import {Chart} from "react-charts";

const plotbar = () => {

    const data = [
    {
        label: "In App Purchase Income",
        datums: [
        { x: "2020", y: 9 },
        { x: "2019", y: 32 },
        { x: "2018", y: 35 },
        { x: "2017", y: 36 },
        { x: "2016", y: 38 },
        { x: "2015", y: 30 },
        { x: "2014", y: 29 },
        ],
    },
    {
        label: "Advertising Income",
        datums: [
        { x: "2020", y: 4 },
        { x: "2019", y: 3 },
        { x: "2018", y: 12 },
        { x: "2017", y: 14 },
        { x: "2016", y: 10 },
        { x: "2015", y: 9 },
        { x: "2014", y: 17 },
        ],
    },
    ]

    return( 
        <>
        <h1> bar chart sample </h1>
        <figure style={{ height: 300 }}>
        <Chart
            data={data}
            series={{ type: "bar" }}
            axes={[
            { primary: true, type: "ordinal", position: "left" },
            { position: "bottom", type: "linear", stacked: true },
            ]}
            tooltip
        />
        </figure>
        </>
    )
}

export default plotbar;

