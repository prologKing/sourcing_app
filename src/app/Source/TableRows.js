import React, { useEffect, useState } from 'react';

function TableRows({rowsData, deleteTableRows, handleChange}) {


    return(
        
        rowsData.map((data, index)=>{
            const {suppliername, contact}= data;
            return(

                <tr key={index}>
                <td key={index+"_0"}>
               <input type="text" value={suppliername} onChange={(evnt)=>(handleChange(index, evnt))} name="suppliername" className="form-control"/>
                </td>
                <td colSpan="2" key={index+"_1"}><input type="text" value={contact}  onChange={(evnt)=>(handleChange(index, evnt))} name="contact" className="form-control"/> </td>
                <td key={index+"_2"}><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
               </tr>

            )
        })
   
    )
    
}

export default TableRows;