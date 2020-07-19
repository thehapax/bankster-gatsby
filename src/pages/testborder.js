import React from "react"

const PurpleBorder = ({ children }) => {
    return (
        <>
        <div style={{ border: "10px solid rebeccapurple" }}>{children}</div>
        </>
    )
}

export default PurpleBorder