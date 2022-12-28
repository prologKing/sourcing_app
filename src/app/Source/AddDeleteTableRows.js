import React, { useEffect, useState } from 'react';
import TableRows from "./TableRows"
import Button from "@material-ui/core/Button";

function AddDeleteTableRows(props){


    const [rowsData, setRowsData] = useState(props.suppliers);
 
    const addTableRows = (e)=>{
        e.preventDefault();
        const rowsInput={
            suppliername:'',
            contact:''
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
}

const submitForm = (e) => {
    e.preventDefault();
    props.handleChange(1, rowsData);
    props.handleNext();

}

    return(
        <div className="container">
            <form className="forms-sample"  method="POST" onSubmit={submitForm}>
            <div className="row">
                <div className="col-sm-12">
                <span>Invite suppliers to this event <button className="btn btn-outline-secondary ml-3">Lookup</button></span>    
                <hr />
                
                <table className="table">
                    <thead>
                      <tr>
                          <th width="30%" className="text-muted">Supplier Name</th>
                          <th className="text-muted">Contact</th>
                          <th></th>
                          <th><button className="btn btn-outline-primary" onClick={addTableRows} >+</button></th>
                      </tr>

                    </thead>
                   <tbody>

                   <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                   </tbody> 
                </table>
                
                </div>
                <Button
                    onClick={props.handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Continue
                  </Button>
                  
                <div className="col-sm-4">

                </div>
            </div>
            </form>
        </div>
    )

}
export default AddDeleteTableRows