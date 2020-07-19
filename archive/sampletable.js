//import React from "react";
//import MUIDataTable from "mui-datatables";

export const columns = ["Name", "Company", "City", "State"];

export const datums = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

export const options = {
  filterType: 'checkbox',
};

/*
export default () => { 
    return (
        <>
        <MUIDataTable 
        title={"Employee List"} 
        data={datums} 
        columns={columns} 
        options={options} 
          />  
        </>
    )
}
*/