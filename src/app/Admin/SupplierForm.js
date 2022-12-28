import React, {} from 'react';
import { Form } from 'react-bootstrap';

function SupplierForm(props) {
  
    const submitForm = (e) => {
        e.preventDefault();

    }

    return (
      <div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
      {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
        <div className="card-body">
          <h4 className="card-title text-muted">New Supplier</h4><hr className="mt-1" />
          <br/>
          <form className="forms-sample"  method="POST" onSubmit={submitForm}>
          <ol className="number-circle-list">
                    <li className="number-circle-list--list-item"> 
                    <span className="card-text text-black">Search</span>
                    <br />
                    <br />
                  <div className="ml-4">  
                  <label className="ml-2" htmlFor="exampleInputName1"><strong>Kotage ID</strong></label>
                  <Form.Group className="input-group col-6 col-md-6 col-sm-12">
                  
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title"  />
                    <div className="input-group-append bg-transparent">
                    <i className="input-group-text border-0 mdi mdi-magnify"></i>
                   </div>
                  </Form.Group>
                  </div>
                  </li>

                  
            </ol> 
            <div className="ml-4 pl-4">
                <button type="button" className="btn btn-outline-secondary btn-fw">Cancel</button>
                <button type="button" className="btn btn-success btn-fw"  style={{backgroundColor:'#629C44'}}>Save</button>
                </div>     
            </form>
      </div>
      </div>
      </div>
      </div>
      
    );
  }

export default SupplierForm;